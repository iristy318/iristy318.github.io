#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    // main settings
    ofBackground(32,32,32);
   
    mainbg.load("main.jpg");
    bg1.load("bg1-2.png");
    bg2.load("bg2.jpg");
    
    //setup GUI
    gui.setup();
    gui.add(button1.setup("Loki"));
    gui.add(button2.setup("Spider Man"));
    gui.add(buttonReset.setup("Reset"));
    
    button1.addListener(this, &ofApp::button1Pressed);
    button2.addListener(this, &ofApp::button2Pressed);
    //button3.addListener(this, &ofApp::button3Pressed);
    buttonReset.addListener(this, &ofApp::buttonResetPressed);
    
    //01: Loki
    gridX = 300;
    gridY = 75;
    waveHeight = 45;
    baseHeight = 6;
    
    stroke_color = ofColor(0);
    
    bg_color = ofColor(255);
    fbo_color = ofColor(0);
    stroke_color = ofColor(32,32,32);
    
    ofEnableAntiAliasing();
    ofEnableSmoothing();
    ofSetFrameRate(60);
    
    ofTrueTypeFont ttf1;
    ttf1.loadFont("Cooper.ttf", 130);
    string s = "LOKI";
    
    ofFbo fbo;
    fbo.allocate(ofGetWidth(), ofGetHeight(), GL_RGBA);
    pix.allocate(ofGetWidth(), ofGetHeight(), OF_PIXELS_RGBA);
    fbo.begin();
    ofClear(0, 0, 0, 0);
    
    ofRectangle r = ttf1.getStringBoundingBox(s, 0, 0);
    ofVec2f offset = ofVec2f(floor(-r.x - r.width * 0.5f), floor(-r.y - r.height * 0.5f));
    ofSetColor(fbo_color);
    ttf1.drawString(s, fbo.getWidth() / 2 + offset.x, fbo.getHeight() / 2 + offset.y);
    fbo.end();
    
    fbo.readToPixels(pix);
    
    //02: spider man
    ofTrueTypeFont ttf2;
    
    ofEnableAntiAliasing();
    ofEnableSmoothing();
    ofSetFrameRate(60);
    
    ttf2.loadFont("Spider-Man.ttf", 90, true, false, true);
    string s1 = "SPIDER-MAN";

    ofRectangle r1 = ttf2.getStringBoundingBox(s1, 0, 0);
    center2 = ofVec2f(floor(-r1.x - r1.width * 0.5f), floor(-r1.y - r1.height * 0.5f));
    center2.x += ofGetWidth() / 2;
    center2.y += ofGetHeight() / 2;

    vector <ofTTFCharacter> paths = ttf2.getStringAsPoints(s1);
    
    for(int i = 0; i < paths.size(); i++){
        vector <ofPolyline> polylines2 = paths[i].getOutline();
        for(int j = 0; j < polylines2.size(); j++){
            
            vector <ofVec2f> linePoints2;
            
            ofPolyline spacePoly2 = polylines2[j].getResampledBySpacing(10);
            
            for(int k = 0; k < spacePoly2.size(); k++){
                linePoints2.push_back(spacePoly2[k]);
            }
            points2.push_back(linePoints2);
        }
    }
    
    nextPointSpeed = 0.3;
    
    outline.setStrokeColor(ofColor(191,36,50));
    outline.setStrokeWidth(10);
    for(int i = 0; i < points2.size(); i++){
        vector <ofVec2f> charPoints = points2[i];
        outline.moveTo(charPoints[0]);
        for(int j = 1; j < charPoints.size(); j++){
            outline.lineTo(charPoints[j]);
        }
    }

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    if(current == 0){
        ofSetColor(255);
        mainbg.draw(0,0);
        gui.draw();
    }
    
    else if(current == 1){
        ofSetColor(255);
        bg1.draw(0,0);
        
        ofColor bgcolor1;
        bgcolor1.setHsb(ofMap(ofGetMouseX(),0,600,80,190), 100, 50);
        ofSetBackgroundColor(bgcolor1);
        gui.draw();
        
        float w = float(ofGetWidth()) / gridX;
        float h = float(ofGetHeight()) / gridY;
        ofTranslate(w / 2, h / 2);
        float fc = ofGetElapsedTimef() * 0.5;
        // for each 'row'
        for(int y = 0; y < gridY; y++){
            bool continuous = false;
            for(int x = 0; x < gridX; x++){
                float vx = x * w;
                float vy = y * h;
                ofColor c = pix.getColor((int)vx, (int)vy);
                bool inText = (c == fbo_color);
                if(inText){
                    if(!continuous){
                        continuous = true;
                        path = ofPath();
                        //fill_color.setHsb(fmod(vx + 2 * vy + ofGetFrameNum(),270), 220, 230);
                        fill_color.set(fmod(vx + 2 * vy + ofGetFrameNum(),200), 230, 150, 180);
                        path.setFillColor(fill_color);
                        path.setStrokeColor(stroke_color);
                        path.setStrokeWidth(0.01);
                        path.moveTo(vx, vy);
                    }
                    float n = ofNoise(vx * 0.1 + fc, vy * 0.05, fc);
                    vy -= n * n * waveHeight + baseHeight;
                    path.curveTo(vx, vy);
                }
                else{
                    if(continuous){
                        continuous = false;
                        path.lineTo(vx, vy);
                        path.close();
                        path.draw();
                    }
                }
            }
        }
    }else if(current == 2){
        ofSetColor(255);
        bg2.draw(0,0);
        gui.draw();
        
        //draw lines
        ofEnableAlphaBlending();
        ofSetColor(225,225,225,30);
        
        for (auto line : lines) {
            ofDrawLine(line.a, line.b);
        }
        
        ofTranslate(center2.x, center2.y);
        outline.draw();
        //color of dots
        ofFill();
        ofSetColor(14,75,166);
        for(int i = 0; i < points2.size(); i++){
            vector <ofVec2f> charPoints = points2[i];
            for(int j = 0; j < charPoints.size(); j++){
                ofCircle(charPoints[j], 2);
            }
        }
    
        //color of lines
        ofFill();
        ofSetColor(14,75,166);
        ofSetLineWidth(0.5);
        int fc = (int)(ofGetFrameNum() * nextPointSpeed);
        for(int i = 0; i < points2.size(); i++){
            vector <ofVec2f> charPoints = points2[i];
            for(int j = 0; j < charPoints.size(); j++){
                ofLine(charPoints[j], charPoints[(j + fc) % charPoints.size()]);
            }
        }
    }

}


void ofApp::button1Pressed(){
    current = 1;
}

void ofApp::button2Pressed(){
    current = 2;
}

void ofApp::button3Pressed(){
    current = 3;
}

void ofApp::buttonResetPressed(){
    current = 0;
    draw();
}
//--------------------------------------------------------------

//ofVec2f ofApp::getVelocity(const ofVec2f & pos){
//    float factor = 0.005;
//    float angle = ofNoise(pos.x * factor, pos.y * factor, ofGetFrameNum() * factor) * 360;
//    ofVec2f vel(0.5, 0);
//    vel.rotate(angle);
//    return vel;
//}

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
    for (auto point : drawnPoints){
        ofPoint mouse;
        mouse.set(x,y);
        float dist = (mouse - point).length();
        if (dist < 60){
            Line lineTemp;
            lineTemp.a = mouse;
            lineTemp.b = point;
            lines.push_back(lineTemp);
        }
    }
    drawnPoints.push_back(ofPoint(x,y));
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
