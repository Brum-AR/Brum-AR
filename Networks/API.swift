//
//  API.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import Foundation
import SwiftUI

public var idScooters: [String:String] = [
    "vertbn":"622ab59950f323eb24c4ae0f",
    "bluebn":"622ab59f2a2d2e45b3b6b6c3",
    "beigebn":"622ab5a5a5ef818db15ad3d9",
    "grisbn":"622ab5aa6750bc0ebce4debe",
    "vertnn":"622ab5b403e60a4594837fe9",
    "bluenn":"622ab5c515ec5cf80aa0a8ec",
    "beigenn":"622ab5caca5d21f155c87e7d",
    "grisnn":"622ab5cf75a8d9a87b524662",
    "vertbo":"622ab59950f323eb24c4ae0f",
    "bluebo":"622ab59f2a2d2e45b3b6b6c3",
    "beigebo":"622ab5a5a5ef818db15ad3d9",
    "grisbo":"622ab5aa6750bc0ebce4debe",
    "vertno":"622ab5b403e60a4594837fe9",
    "blueno":"622ab5c515ec5cf80aa0a8ec",
    "beigeno":"622ab5caca5d21f155c87e7d",
    "grisno":"622ab5cf75a8d9a87b524662"
]

public var scootersID: [String:String] = [
    "622ab59950f323eb24c4ae0f":"vertbn",
    "622ab59f2a2d2e45b3b6b6c3":"bluebn",
    "622ab5a5a5ef818db15ad3d9":"beigebn",
    "622ab5aa6750bc0ebce4debe":"grisbn",
    "622ab5b403e60a4594837fe9":"vertnn",
    "622ab5c515ec5cf80aa0a8ec":"bluenn",
    "622ab5caca5d21f155c87e7d":"beigenn",
    "622ab5cf75a8d9a87b524662":"grisnn"
]

class API : ObservableObject{
    @Published var scooter = [Scooter]()
    @Published var scooters = [Scooter]()
    
    func loadData(id: String , completion:@escaping ([Scooter]) -> ()) {
        guard let url = URL(string: "https://brum-ar-api.herokuapp.com/scooter/" + id) else {
            print("Invalid url...")
            return
        }
        URLSession.shared.dataTask(with: url) { data, response, error in
            let scooter = try! JSONDecoder().decode(Scooter.self, from: data!)
            print(self.scooters)
            self.scooters.append(scooter)
            DispatchQueue.main.async {
                
                completion(self.scooters)
            }
        }.resume()
        
    }
    
    func loadDataScooters(completion:@escaping ([ScootElement]) -> ()) {
        guard let url = URL(string: "https://brum-ar-api.herokuapp.com/scooter") else {
            print("Invalid url...")
            return
        }
        URLSession.shared.dataTask(with: url) { data, response, error in
            let scooters = try! JSONDecoder().decode([ScootElement].self, from: data!)
            print(scooters)
            DispatchQueue.main.async {
                completion(scooters.filter({$0.saddleColor == "Beige"}))
            }
        }.resume()
        
    }

}
