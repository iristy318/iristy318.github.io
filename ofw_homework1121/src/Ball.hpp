//
//  Ball.hpp
//  example_1114
//
//  Created by Iristy on 2017/11/14.
//

#ifndef Ball_hpp
#define Ball_hpp

#include <stdio.h>
#include "ofMain.h"

class Ball{
    
public:
    void setup(int x, int y);
    void update();
    void draw();
    
    void kick();
    
    ofPoint position, velocity, deceleration, acceleration, mouseposition, delta;
    float distance;
    
    ofColor color;
    
    int radius;
    float lifespan;
};

#endif /* Ball_hpp */
