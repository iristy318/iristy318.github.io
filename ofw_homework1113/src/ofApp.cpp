#include "ofApp.h"

ofColor *colors;

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetBackgroundAuto(false);
    
    // We still want to draw on a black background, so we need to draw
    // the background before we do anything with the brush
    ofBackground(253,253,200);
    ofSetFrameRate(20);
    
//    colors = new ofSetColor[3];
//
//    colors[0] = (ofRandom(150,250),ofRandom(80,100),ofRandom(40,100));
//
//    colors[1] = (ofRandom(10,250),ofRandom(80,100),ofRandom(40,100));
//
//    colors[2].r = 59;
//    colors[2].g = 129;
//    colors[2].b = 150;
}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    
        float randomRadius = ofRandom(10,50);
        float distance = ofRandom(0,60);

        if(click == false){
            ofSetColor(ofRandom(150,240),ofRandom(80,100),ofRandom(40,100),ofRandom(40,60));
            for (int i = 0; i < 5; i++){
                ofDrawCircle(ofGetMouseX()+distance, ofGetMouseY()+distance, randomRadius);
            }
        }
        else{
            ofSetColor(ofRandom(50,100),ofRandom(150,200),ofRandom(100,180),ofRandom(40,60));
            for (int i = 0; i < 5; i++){
                ofDrawRectangle(ofGetMouseX()+distance, ofGetMouseY()+distance, randomRadius, randomRadius);
            }
        }
    
//        if(ofGetKeyPressed(OF_MOUSE_BUTTON_RIGHT)){
//            click = !click;
//        }
    
        ofSetRectMode(OF_RECTMODE_CENTER);

}
    
//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    if(key == OF_KEY_TAB){
        click = !click;
    }
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
