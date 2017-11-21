#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetBackgroundColor(32, 32, 32);
    myfont.loadFont("/Library/Fonts/Arial Black.ttf", 32);
    
    int num = 40;
    for (int i = 0; i < num; i ++) {
        Ball aBall;
        aBall.setup(ofRandom(ofGetWidth()), ofRandom(ofGetHeight()));
        myBalls.push_back(aBall);
    }
}

//--------------------------------------------------------------
void ofApp::update(){
    for (int i = 0; i < myBalls.size(); i ++) {
        myBalls[i].update();
        float dis = ofDist(myBalls[i].position.x, myBalls[i].position.y, ofGetMouseX(), ofGetMouseY());
        if (dis <= 65)
        {
            myBalls[i].velocity.x *= -1;
            myBalls[i].velocity.y *= -1;
            
        }
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    for (int i = 0; i < myBalls.size(); i ++) {
        myBalls[i].draw();
    }
    ofSetLineWidth(2.5);
    ofNoFill();
    ofSetColor(200, 200, 200);
    ofDrawCircle(ofGetMouseX(), ofGetMouseY(), 55);
    
    //ofClear(0);
    myfont.drawString("Catch the Ball!", ofGetWidth()/2-180, 200);
    //ofDrawBitmapString("Catch the ball!", ofGetWidth()/2, 100);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    for (int i = 0; i < myBalls.size(); i ++) {
        myBalls[i].kick();
    }
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}


