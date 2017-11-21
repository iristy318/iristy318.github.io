//
//  Dog.hpp
//  example_1114
//
//  Created by Iristy on 2017/11/14.
//

#ifndef Dog_hpp
#define Dog_hpp

#include <stdio.h>



#include "ofMain.h"

class Dog{
    
public:
    
    Dog();
    
    void setup();
    void update();
    void draw();
    void sit();
    
    ofColor getFurColor();
    
    string name;
    ofPoint position;
    
private:
    ofColor furColor;
};

#endif /* Dog_hpp */
