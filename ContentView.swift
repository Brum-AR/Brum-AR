//
//  ContentView.swift
//  ARProject
//
//  Created by brs on 09/03/2022.
//

import SwiftUI
import RealityKit

struct ContentView : View {
    @EnvironmentObject var data: DataModel
    @Environment(\.presentationMode) var presentationMode
    @State private var showShareSheet = false
    var ar = ARUIView()
    @State var image: UIImage?
    var body: some View {
        ZStack(alignment: .bottom){
            
            ARDisplayView()
            ARUIView()
            VStack{
                
                HStack{
                Button{
                    self.presentationMode.wrappedValue.dismiss()
                } label: {
                    Image(systemName: "chevron.left.circle.fill")
                        .resizable()
                        .frame(width: 50, height: 50)
                        .foregroundColor(Color("beige"))
                }.background(
                    Circle()
                        .fill(.white)
                        .frame(width: 70, height: 70)
                ).padding(20).padding(.top, 20).padding(.leading, 20)
                    Spacer()
                    
                    Button{
                        self.image = UIImage.init(named: "scoot1")
                        UIImageWriteToSavedPhotosAlbum(image!, nil, nil, nil)
                        self.showShareSheet = true
                    } label: {
                        Image(systemName: "square.and.arrow.up")
                            .resizable()
                            .frame(width: 35, height: 40)
                            .foregroundColor(Color.white)
                    }.padding(20).padding(.top, 20).padding(.trailing, 20)
                }
                Spacer()
            }.edgesIgnoringSafeArea(.all).background(Color.clear)
                .frame(maxWidth: .infinity, maxHeight: .infinity).onAppear{
                    data.enableAR = true
                }
        }.sheet(isPresented: $showShareSheet) {
            ShareView(activityItems: [image])
        }
    }
    
}


extension View {
    func snapshot() -> UIImage {
        let controller = UIHostingController(rootView: self)
        let view = controller.view

        let targetSize = controller.view.intrinsicContentSize
        view?.bounds = CGRect(origin: .zero, size: targetSize)
        view?.backgroundColor = .clear

        let renderer = UIGraphicsImageRenderer(size: targetSize)

        return renderer.image { _ in
            view?.drawHierarchy(in: controller.view.bounds, afterScreenUpdates: true)
        }
    }
}
