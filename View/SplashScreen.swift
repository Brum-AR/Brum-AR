//
//  SplashScreen.swift
//  ARProject
//
//  Created by brs on 09/03/2022.
//

import SwiftUI
import Lottie

struct SplashScreen: View {
    @State var isActive:Bool = false
    private var animationView: AnimationView?

    var body: some View {
        VStack {
            if self.isActive {
                CustomTabBar()
            } else {
                VStack{
                LottieView(name: "scooter", loopMode: .loop)
                            .frame(width: 500, height: 500)
                    Image("logo").resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(width: 50, height: 50)
                        
                }.frame(maxWidth: .infinity, maxHeight: .infinity)
                   
                    .background(Color("beige"))
                    .transition(.opacity)
            }
        } .ignoresSafeArea(.all)
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) {
                withAnimation(.easeInOut(duration: 1.0)) {
                    self.isActive = true
                }
            }
        }
        
    }
}
