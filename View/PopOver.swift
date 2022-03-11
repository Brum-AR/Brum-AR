//
//  PopOver.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import SwiftUI

struct PopOver: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 18){
            
            Button{

            } label: {
                HStack(spacing: 15){
                    Image("scoot1").resizable().frame(width: 30, height: 30)
                    Text("Scooter bleu avec top case")
                }
               
            }
            Divider()
            Button{

            } label: {
                HStack(spacing: 15){
                    Image("scoot1").resizable().frame(width: 30, height: 30)
                    Text("Scooter bleu")
                }
               
            }
        }.foregroundColor(.black).frame(width: 350).padding().padding(.bottom, 20)
            .background(Color.white)
    }
}


struct ArrowShape: Shape {
    func path(in rect: CGRect) -> Path {
        let center = rect.width / 2
        return Path {path in
            path.move(to: CGPoint(x: 0, y: 0))
            path.addLine(to: CGPoint(x: rect.width, y: 0))
            path.addLine(to: CGPoint(x: rect.width, y: rect.height - 20))
            
            path.addLine(to: CGPoint(x: center - 15, y:  rect.height - 20))
            path.addLine(to: CGPoint(x: center, y: rect.height))
            path.addLine(to: CGPoint(x: center + 15, y: rect.height - 20))
            
            path.addLine(to: CGPoint(x: 0, y: rect.height - 20))
        }
    }
}
