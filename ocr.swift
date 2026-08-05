import Cocoa
import Vision

let folder = "/Users/admin/Documents/shapesstyle website/shapes-style/mi website haridwar/public/partners"
let fm = FileManager.default
let files = try! fm.contentsOfDirectory(atPath: folder)

for file in files {
    if file.hasSuffix(".jpg") || file.hasSuffix(".png") {
        let path = folder + "/" + file
        guard let img = NSImage(contentsOfFile: path),
              let cgImage = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { continue }
        
        let request = VNRecognizeTextRequest { (request, error) in
            guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
            let recognizedStrings = observations.compactMap { observation in
                return observation.topCandidates(1).first?.string
            }
            if !recognizedStrings.isEmpty {
                print("\(file): \(recognizedStrings.joined(separator: " "))")
            }
        }
        
        let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        try? handler.perform([request])
    }
}
