//
//  HomeView.swift
//  ARProject
//
//  Created by brs on 09/03/2022.
//

import SwiftUI

struct HomeView: View {
    @Environment(\.presentationMode) var presentationMode
    @State var scooters = [ScootElement]()
    @State var scooter = [Scooter]()
    @State var navigationTag: String?
    @State private var isPresented = false
    @State private var showLoader = true
    @State private var currentDescription = "Général"
    var descritpion = ["Général", "Moteur", "Batterie", "Cadre", "Pneus & Freins", "Accessoires"]
    var colorsReturn : [String] = ["blue", "beigeColor", "grey", "green"]
    var productBG : [String:String] = [
        "622ab59950f323eb24c4ae0f":"bg_scoot4",
        "622ab59f2a2d2e45b3b6b6c3":"bg_scoot1",
        "622ab5a5a5ef818db15ad3d9":"bg_scoot2",
        "622ab5aa6750bc0ebce4debe":"bg_scoot3"
    ]
    var productBGDetail : [String:String] = [
        "622ab59950f323eb24c4ae0f":"bg_circle4",
        "622ab59f2a2d2e45b3b6b6c3":"bg_circle1",
        "622ab5a5a5ef818db15ad3d9":"bg_circle2",
        "622ab5aa6750bc0ebce4debe":"bg_circle3"
    ]
    
    var titleDetail : [String:String] = [
        "622ab59950f323eb24c4ae0f":"Un design épuré.",
        "622ab59f2a2d2e45b3b6b6c3":"Un moteur propre.",
        "622ab5a5a5ef818db15ad3d9":"De toutes les couleurs.",
        "622ab5aa6750bc0ebce4debe":"Deux modes de conduite."
    ]
    var imageBGDetail : [String:String] = [
        "622ab59950f323eb24c4ae0f":"bg_detail_scoot4",
        "622ab59f2a2d2e45b3b6b6c3":"bg_detail_scoot1",
        "622ab5a5a5ef818db15ad3d9":"bg_detail_scoot2",
        "622ab5aa6750bc0ebce4debe":"bg_detail_scoot3"
    ]
    var imageBG : [String:String] = [
        "622ab59950f323eb24c4ae0f":"scoot4",
        "622ab59f2a2d2e45b3b6b6c3":"scoot1",
        "622ab5a5a5ef818db15ad3d9":"scoot2",
        "622ab5aa6750bc0ebce4debe":"scoot3"
    ]
    @State var currentColor =  0
    
    var description : [String:String] = [
        "Général": "scooter_characteristics",
        "Moteur": "engine",
        "Batterie": "battery",
        "Cadre": "framework",
        "Pneus & Freins": "brake",
        "Accessoires":"accessory"
    
    ]
    
    var body: some View {
        VStack{
            HStack{
                Image("logo_reduce")
                    .resizable()
                    .frame(width: 50, height: 50)
                Text("Brum'AR")
                    .foregroundColor(.black)
                Spacer()
            }.padding(.leading, 30)
                .padding(.top, 30)
            
            VStack(spacing: 0){
                NavigationView{
                    ScrollView(.vertical, showsIndicators: false){
                        VStack(spacing: 15){
                            ForEach(scooters){product in
                                NavigationLink(tag: product.id,selection: $navigationTag ){
                                    DetailView(product: product)
                                       // .navigationBarHidden(true)
                                }label: {
                                    BoxView(product: product)
                                }.background(Color.white)
                            } .navigationBarHidden(true)
                        }.background(Color.white)
                        
                    }.background(Color.white)
                }.navigationViewStyle(StackNavigationViewStyle()).accentColor(Color.black.opacity(0.1))
                
                
            }.background(Color.white)
        }.frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Color.white)
            .ignoresSafeArea(.container, edges: .leading)
            .onAppear{
                API().loadDataScooters { (scooters) in
                    self.scooters = scooters
                    print(self.scooters.description)
                }
            }
    }
    
    @ViewBuilder
    func BoxView(product: ScootElement) -> some View {
        
        VStack{
            ZStack{
                Image(productBG[product.id] ?? "")
                    .resizable()
                    .frame(maxWidth: .infinity ,minHeight: 250)
                VStack{
                    HStack{
                        Image(imageBG[product.id] ?? "")
                        Spacer()
                        VStack{
                            Text("\(product.name) .\(product.color)").foregroundColor(Color.black)
                                .fontWeight(.black)
                                .font(.system(size: 40))
                                .padding(.top, 0)
                            
                            HStack{
                                Text("\(product.price) €").foregroundColor(Color.white)
                                    .fontWeight(.bold)
                                    .font(.system(size: 30))
                                    .padding()
                                
                                
                            }.background(
                                RoundedRectangle(cornerRadius: 20)
                                    .fill(Color.gray)
                                    .frame(width: 150, height: 50)
                            ).padding().padding(.leading, 100)
                        }.padding(.trailing, 50)
                        
                    }.padding(.leading, 200)
                    
                }
                
            }
        }.frame( maxWidth: .infinity ,minHeight: 250)
            .background(Color.clear)
        
            .cornerRadius(30)
            .padding()
            .shadow(color: Color("beige").opacity(0.3), radius: 10, x: 2, y: 2)
        
    }
    
    @ViewBuilder
    func DetailView(product: ScootElement) -> some View {
        
        VStack{
            if showLoader{
                LottieView(name: "scooter", loopMode: .loop)
                    .frame(width: 400, height: 400).onAppear{
                        DispatchQueue.main.asyncAfter(deadline: .now() + 2){
                            withAnimation{
                                self.showLoader.toggle()
                            }
                        }
                    }
            }else{
            ScrollView(.vertical, showsIndicators: false) {
                VStack{
                    VStack{
                        HStack{
                            ZStack{
                                
                                Image(productBGDetail[product.id] ?? "")
                                    .resizable()
                                    .frame(width: 400, height: 400)
                                    .offset(x: -100)
                                VStack{
                                    Text("\(product.name) .\(product.color)"  ).foregroundColor(.black)
                                        .fontWeight(.black)
                                        .font(.system(size: 60))
                                    Text(titleDetail[product.id] ?? "").foregroundColor(.gray)
                                        .fontWeight(.black)
                                        .font(.system(size: 30))
                                    
                                } .padding(.bottom, 200).padding(.leading, 200)
                            }
                            Spacer()
                            ZStack{
                                Image(imageBGDetail[product.id] ?? "")
                                    .resizable()
                                    .frame(width: 350, height: 350)
                                    .padding(.leading, 100)
                                Image("electric")
                                    .resizable()
                                    .frame(width: 40, height: 40)
                                    .offset(x: -150,y: -100)
                            }
                        }.offset(y: -50)
                        
                        
                        
                        ZStack{
                            Button(action: {
                                self.isPresented.toggle()
                            }) {
                                HStack {
                                    Text("Visualiser en AR")
                                        .fontWeight(.semibold)
                                        .font(.title)
                                }
                                .frame(minWidth: 0, maxWidth: 250)
                                .padding()
                                .foregroundColor(.white)
                                .background(Color.red)
                                .cornerRadius(40)
                            }.fullScreenCover(isPresented: $isPresented, content: {
                                ContentView().environmentObject(DataModel.shared)
                            })
                            Image("icon_ar").resizable().frame(width: 40, height: 40)
                                .offset(y: -80)//(.bottom, 150)
                        }.padding(.leading, 30)
                        
                        
                        
                        VStack{
                            HStack{
                                Text("Description ").foregroundColor(Color.black)
                                    .fontWeight(.black)
                                    .font(.system(size: 30))
                                    .padding(.leading, 60)
                                    .padding(.bottom, 50)
                                Spacer()
                            }
                            VStack {
                                Picker("", selection: $currentDescription) {
                                    ForEach(descritpion, id: \.self) {
                                        Text($0)
                                    }
                                }
                                .pickerStyle(.segmented)
                            }.frame(maxWidth: .infinity).padding(.horizontal, 250)
                            VStack{
                                switch (currentDescription){
                                case "Général":
                                    DetailViewDescriptionGeneral(product: self.scooter[0]).background(Color.white)
                                case "Moteur":
                                    DetailViewDescriptionMoteur(product: self.scooter[0]).background(Color.white)
                                case "Batterie":
                                    DetailViewDescriptionBatterie(product: self.scooter[0]).background(Color.white)
                                case "Cadre":
                                    DetailViewDescriptionCadre(product: self.scooter[0]).background(Color.white)
                                case "Pneus & Freins":
                                    DetailViewDescriptionPneusFreins(product: self.scooter[0]).background(Color.white)
                                case "Accessoires":
                                    DetailViewDescriptionAccessoires(product: self.scooter[0]).background(Color.white)
                                    
                                default:
                                    DetailViewDescriptionGeneral(product: self.scooter[0]).background(Color.white)
                                }
                                
                            }.padding(.vertical, 30)
                        }.frame(maxWidth: .infinity, minHeight: 300)
                    }.frame(maxWidth: .infinity, maxHeight: .infinity)
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(Color.white)
            }
        }.onAppear() {
            selectedScooterID = product.id
            API().loadData(id: product.id) { (scooter) in
                self.scooter = scooter
            }
        }
       
    }
    
}

