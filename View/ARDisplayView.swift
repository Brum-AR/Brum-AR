//
//  ARDisplayView.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import SwiftUI
import RealityKit

struct ARDisplayView: View {
    var body: some View {
        return ARViewContainer().edgesIgnoringSafeArea(.all)
    }
}

struct ARViewContainer: UIViewRepresentable {
    
    func makeUIView(context: Context) -> ARView {
        return DataModel.shared.arView
    }
    
    func updateUIView(_ uiView: ARView, context: Context) {
        
    }
    
}
