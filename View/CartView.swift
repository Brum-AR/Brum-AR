//
//  CartView.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import SwiftUI

struct CartView: View {
    @State private var pickedColor = "vert"
    @State private var pickedSiege = "b"
    @State private var pickedCase = "n"
    
    @State private var presentAlert = false
    @State private var moneyToPay = "3200€"
    
    @Environment(\.openURL) var openURL
    
    var body: some View {
        HStack(spacing: 50){
            VStack(alignment: .leading, spacing: 20){
                Text("COULEUR")
                Picker("", selection: $pickedColor) {
                    Text("Vert").tag("vert")
                    Text("Bleu").tag("blue")
                    Text("Beige").tag("beige")
                    Text("Gris").tag("gris")
                }
                .pickerStyle(.segmented)
                .frame(width: 450, height: 50, alignment: .trailing)
                Text("SIEGE")
                Picker("", selection: $pickedSiege) {
                    Text("Beige").tag("b")
                    Text("Noir").tag("n")
                }
                .pickerStyle(.segmented)
                .frame(width: 230, height: 50, alignment: .trailing)
                Text("TOP CASE")
                Picker("", selection: $pickedCase) {
                    Text("Non").tag("n")
                    Text("Oui").tag("o")
                }
                
                .pickerStyle(.segmented)
                .frame(width: 200, height: 50, alignment: .trailing)
                .onAppear {
                    UISegmentedControl.appearance().selectedSegmentTintColor = UIColor(Color("bg_grey_dark"))
                    UISegmentedControl.appearance().backgroundColor = UIColor(Color("beige"))
                    let titleTextAttributes = [NSAttributedString.Key.foregroundColor: UIColor.white]
                    UISegmentedControl.appearance().setTitleTextAttributes(titleTextAttributes, for:.normal)
                }
                
                let price = ("\(self.pickedCase)" == "n" ? "\(self.moneyToPay)" : "3264,90€")
                Text("Total : " + "\(price)").padding(.top, 30)
                    .font(.custom("Helvetica Neue", size: 35))
                    .padding(.leading, 10)
                
                Button("PASSER LA COMMANDE", action: {
                    presentAlert = true
                }).foregroundColor(.white)
                    .background(
                        RoundedRectangle(cornerRadius: 15.00)
                            .fill(Color("bg_grey_dark"))
                            .frame(width: 240, height: 50)
                    ).padding(.leading, 25)
                    .padding(.top, 40)
                
                
            }.frame(width: UIScreen.main.bounds.width/2, height: UIScreen.main.bounds.height, alignment: .trailing)
                .background(Color.white)
                .padding(.bottom, 100)
                .alert(isPresented: $presentAlert) { // 4
                    Alert(
                        title: Text("Merci pour votre choix !"),
                        message: Text("Vous allez maintenant être redirigé sur le site WEB de Brum'AR"),
                        primaryButton: .destructive(Text("Annuler"), action: {
                        }),
                        secondaryButton: .default(Text("OK"), action: {
                            let uri = "\(self.pickedColor)\(self.pickedSiege)\(self.pickedCase)"
                            redirectToWebSite(uri: uri)
                        })
                    )
                }
            
            
            VStack(alignment: .leading, spacing: 0){
                
                Image("\(self.pickedColor)\(self.pickedSiege)\(self.pickedCase)").resizable().frame(width: UIScreen.main.bounds.width/2, height: UIScreen.main.bounds.height/2, alignment: .center)
                
                    .scaledToFit()
                    .padding(.trailing, 40)
                
            }.frame(width: UIScreen.main.bounds.width/2, height: UIScreen.main.bounds.height, alignment: .trailing)
        }.frame(maxWidth: .infinity, maxHeight: .infinity)
            .ignoresSafeArea(.all)
    }
    
    
    func redirectToWebSite(uri: String) {
        let idScooter = idScooters[uri] ?? "622ab59950f323eb24c4ae0f"
        
        if(uri.last! == "o"){
            //avec le top case
            openURL(URL(string: "https://brum-ar.herokuapp.com/cart?scooter_id=\(idScooter)&top_case=Oui")!)
        }else{
            //sans le top case
            openURL(URL(string: "https://brum-ar.herokuapp.com/cart?scooter_id=\(idScooter)")!)
        }
    }
}
