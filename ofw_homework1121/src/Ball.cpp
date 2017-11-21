//
//  bounce.cpp
//  example_1114
//
//  Created by Iristy on 2017/11/14.
//

#include "Ball.hpp"

void Ball::setup(int x, int y) {
    
    position.x = x;
    position.y = y;
    
    
    
    velocity.set(ofRandom(-1,1), ofRandom(-1,1));
    acceleration.set(0, 0.05);
    deceleration.set(.99, .99);
    
    color.setHsb(ofRandom(360), ofRandom(100,150), 200);
    radius = 10;
    lifespan = 255;
}

void Ball::update(){

    position += velocity;
    velocity += acceleration;
    
    if(position.x < 0 || position.x > ofGetWidth())
    {
        velocity.x *= -1;
        color.setHsb(ofRandom(360), ofRandom(100,150), 200);

    }

    if(position.y < 0 || position.y > ofGetHeight())
    {
        velocity.y *= -1;
        color.setHsb(ofRandom(360), ofRandom(100,150), 200);
    }

}

void Ball::draw(){
    ofFill();
    ofSetColor(color);
    ofDrawCircle(position.x, position.y, radius);
}

void Ball::kick(){
    velocity.x += ofRandom(-5, 5);
    velocity.y += ofRandom(-5, 5);
}


