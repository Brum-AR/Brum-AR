//
//  Scooter.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import Foundation

// MARK: - Scooter
struct Scooter: Codable {
    let id, name: String
    let price: Int
    let color, saddleColor: String
    let scooterCharacteristics: ScooterCharacteristics
    let engine: Engine
    let battery: Battery
    let framework: Framework
    let brake: Brake
    let tire: Tire
    let accessory: Accessory

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case name, price, color
        case saddleColor = "saddle_color"
        case scooterCharacteristics = "scooter_characteristics"
        case engine, battery, framework, brake, tire, accessory
    }
}

struct Accessory: Codable {
    let alarmAndGeotracking, topCase, windshield, portableKey: String
    let usbPort, ecoMode: String

    enum CodingKeys: String, CodingKey {
        case alarmAndGeotracking = "alarm_and_geotracking"
        case topCase = "top_case"
        case windshield
        case portableKey = "portable_key"
        case usbPort = "usb_port"
        case ecoMode = "eco_mode"
    }
}

struct Battery: Codable {
    let type, brand, power, life: String
    let maxAutonomyECO, chargingTime: String
    let removable: Bool
    let weight: Int

    enum CodingKeys: String, CodingKey {
        case type, brand, power, life
        case maxAutonomyECO = "max_autonomy_ECO"
        case chargingTime = "charging_time"
        case removable, weight
    }
}

struct Brake: Codable {
    let brakingEnergyRecovery: Bool
    let brakes, brakesSize, stirrupsType: String

    enum CodingKeys: String, CodingKey {
        case brakingEnergyRecovery = "braking_energy_recovery"
        case brakes
        case brakesSize = "brakes_size"
        case stirrupsType = "stirrups_type"
    }
}


struct Engine: Codable {
    let type, position, power: String
}

// MARK: - Framework
struct Framework: Codable {
    let dimension, saddleHeight: String
    let scooterWeightWithoutBattery, maxWeight: Int
    let frontSuspensionType, backSuspensionType, assembly: String

    enum CodingKeys: String, CodingKey {
        case dimension
        case saddleHeight = "saddle_height"
        case scooterWeightWithoutBattery = "scooter_weight_without_battery"
        case maxWeight = "max_weight"
        case frontSuspensionType = "front_suspension_type"
        case backSuspensionType = "back_suspension_type"
        case assembly
    }
}

// MARK: - ScooterCharacteristics
struct ScooterCharacteristics: Codable {
    let maxSpeed, cylinder, license: String
    let reverseGear: Bool
    let controlScreen, antiTheftSecurity, crutch: String

    enum CodingKeys: String, CodingKey {
        case maxSpeed = "max_speed"
        case cylinder, license
        case reverseGear = "reverse_gear"
        case controlScreen = "control_screen"
        case antiTheftSecurity = "anti_theft_security"
        case crutch
    }
}


// MARK: - Tire
struct Tire: Codable {
    let type, size: String
}
