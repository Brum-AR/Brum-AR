//
//  DetailViewItems.swift
//  ARProject
//
//  Created by brs on 11/03/2022.
//

import SwiftUI

@ViewBuilder
func DetailViewDescriptionGeneral(product: Scooter) -> some View {
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    VStack{
        LazyVGrid(columns: columns) {
            VStack{
                Text(product.scooterCharacteristics.controlScreen)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text(product.scooterCharacteristics.maxSpeed)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.scooterCharacteristics.antiTheftSecurity)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.scooterCharacteristics.cylinder)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            VStack{
                Text("\(product.scooterCharacteristics.license)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.scooterCharacteristics.crutch)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
        }
    }.frame(maxWidth: 600).padding(.vertical, 10)
}

@ViewBuilder
func DetailViewDescriptionMoteur(product: Scooter) -> some View {
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    VStack{
        LazyVGrid(columns: columns) {
            VStack{
                Text(product.engine.type)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text(product.engine.position)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.engine.power)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
        }
    }.frame(maxWidth: 600).padding(.vertical, 10)
}

@ViewBuilder
func DetailViewDescriptionBatterie(product: Scooter) -> some View {
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    VStack{
        LazyVGrid(columns: columns) {
            VStack{
                Text(product.battery.type)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text(product.battery.brand)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.battery.maxAutonomyECO)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            VStack{
                Text("\(product.battery.chargingTime)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            VStack{
                Text("\(product.battery.weight)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
        }
    }.frame(maxWidth: 600).padding(.vertical, 10)
}

@ViewBuilder
func DetailViewDescriptionCadre(product: Scooter) -> some View {
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    VStack{
        LazyVGrid(columns: columns) {
            VStack{
                Text(product.brake.brakes)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text(product.brake.brakesSize)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.brake.stirrupsType)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
        }
    }.frame(maxWidth: 600).padding(.vertical, 10)
}

@ViewBuilder
func DetailViewDescriptionPneusFreins(product: Scooter) -> some View {
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    VStack{
        LazyVGrid(columns: columns) {
            VStack{
                Text(product.brake.brakesSize)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text(product.brake.brakes)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.brake.stirrupsType)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
        }
    }.frame(maxWidth: 600).padding(.vertical, 10)
}

@ViewBuilder
func DetailViewDescriptionAccessoires(product: Scooter) -> some View {
    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    VStack{
        LazyVGrid(columns: columns) {
            VStack{
                Text(product.accessory.alarmAndGeotracking)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text(product.accessory.topCase)
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            
            VStack{
                Text("\(product.accessory.windshield)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            VStack{
                Text("\(product.accessory.portableKey)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            VStack{
                Text("\(product.accessory.usbPort)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
            VStack{
                Text("\(product.accessory.ecoMode)")
                    .fontWeight(.bold)
                    .font(.system(size: 15))
            }.padding(3).frame(width: 150, height: 100)
                .background(                        RoundedRectangle(cornerRadius: 15)
                                                        .fill(Color("beige").opacity(0.4))
                ).padding(.vertical, 5)
        }
    }.frame(maxWidth: 600).padding(.vertical, 10)
}
