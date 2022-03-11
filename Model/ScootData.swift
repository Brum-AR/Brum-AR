//
//  ScootData.swift
//  ARProject
//
//  Created by brs on 09/03/2022.
//

import Foundation

struct ScootData: Identifiable,Codable {
    let id: String
    let price: Int
    let name: String
    let color: String
    let saddleColor: String
    
    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case price, name, color, saddleColor
    }
}
