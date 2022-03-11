//
//  ARUIView.swift
//  ARProject
//
//  Created by brs on 10/03/2022.
//

import SwiftUI

struct ARUIView: View {
    @EnvironmentObject var data : DataModel
    @Environment(\.presentationMode) var presentationMode
    @State var show = false
        var body: some View {
        
            ZStack(alignment: .bottomTrailing){
                
                VStack(alignment: .center, spacing: 15){
                    
                    if self.show {
                        PopOver()
                            .background(Color.white)
                            .clipShape(ArrowShape())
                            .cornerRadius(15)
                            .offset(y: 10)
                    }
                   
                    
                    Button{
                        withAnimation{
                            self.show.toggle()
                        }
                    } label: {
                        Image(systemName: self.show ? "xmark.circle" :"plus.circle")
                            .resizable()
                            .frame(width: 50, height: 50)
                            .foregroundColor(Color("beige"))
                    }.background(
                        Circle()
                            .fill(.white)
                            .frame(width: 70, height: 70)
                    ).frame(width: 50, height: 50, alignment: .center)
                        .padding(.bottom, 30)
                }.padding()
            }
    }
}

struct ARUIView_Previews: PreviewProvider {
    static var previews: some View {
        ARUIView()
    }
}
