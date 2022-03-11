//
//  CustomTabBar.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import SwiftUI


struct CustomTabBar: View {
    @Environment(\.presentationMode) var presentationMode
    @State var currentTab: Tab = .Home
    var body: some View {
        TabView(selection: $currentTab){
            HomeView()
                .tag(Tab.Home)
            CartView()
                .tag(Tab.Panier)
        }.background(Color.white)
        .overlay(
            HStack(spacing: 0){
                ForEach(Tab.allCases, id: \.rawValue){tab in
                    TabButton(tab: tab)
                }
            }.padding(.vertical)
                .padding(.bottom, getSafeArea().bottom == 0 ? 10 : (getSafeArea().bottom - 10))
                
                .background(Color("beige"))
            ,alignment: .bottom
            
        )
        .ignoresSafeArea(.all, edges: .bottom)
        
    }
    
    @ViewBuilder
    func TabButton(tab: Tab )-> some View{
        
        Button{
            
            withAnimation(.spring()){
                currentTab = tab
                presentationMode.wrappedValue.dismiss()
            }
            
        }label: {
            Image(systemName: tab.rawValue)
                .resizable()
                .aspectRatio( contentMode: .fit)
                .frame(width: 25, height: 25)
                .frame(maxWidth: .infinity)
                .foregroundColor(.white)
        }
       
    }
}

enum Tab: String, CaseIterable{
    case Home = "house.fill"
    case Panier = "cart.fill"
}


extension View {
    func getSafeArea() -> UIEdgeInsets {
        guard let screen = UIApplication.shared.connectedScenes.first as? UIWindowScene else {
            return .zero
        }
        
        guard let safeArea = screen.windows.first?.safeAreaInsets else {
            return .zero
        }
        
        return safeArea
    }
}
