//
//  Scoot.swift
//  ARProject
//
//  Created by brs on 11/03/2022.
//

import Foundation

struct ScootElement: Codable, Identifiable {
    let id, saddleColor, color: String
    let price: Int
    let name: String

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case saddleColor = "saddle_color"
        case color, price, name
    }
}
