//
//  DataModel.swift
//  ARProject
//
//  Created by brs on 09/03/2022.
//

import Foundation
import Combine
import RealityKit
public var selectedScooterID: String = "beigebo"

final class DataModel: ObservableObject {
    static var shared = DataModel()
    @Published var arView: ARView!
    @Published var enableAR = false
    
    init() {
        
        arView = ARView(frame: .zero, cameraMode: .ar, automaticallyConfigureSession: true)
     
        let name = scootersID[selectedScooterID] ?? "beigebo"
        print("Name of file : (name)")
        guard let entity = try? Entity.load(named: name) else {
            return
        }
        
        // Creating parent ModelEntity
        let parentEntity = ModelEntity()
        entity.setScale(SIMD3(repeating: 4), relativeTo: entity)
        
        parentEntity.addChild(entity)
        
        
        // Anchoring the entity and adding it to the scene
        let anchor = AnchorEntity(.plane(.horizontal, classification: .any, minimumBounds: .zero))
        anchor.addChild(parentEntity)
        
        arView.scene.addAnchor(anchor)
        // Add a collision component to the parentEntity with a rough shape and appropriate offset for the model that it contains
        let entityBounds = entity.visualBounds(relativeTo: parentEntity)
        parentEntity.collision = CollisionComponent(shapes: [ShapeResource.generateBox(size: entityBounds.extents).offsetBy(translation: entityBounds.center)])
        
        // installing gestures for the parentEntity
        arView.installGestures(for: parentEntity)
        
    }
}
