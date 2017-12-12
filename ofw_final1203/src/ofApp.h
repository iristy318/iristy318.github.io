#pragma once

#include "ofMain.h"
#include "ofxGui.h"
#include "MovingLine.h"

class Line {
public:
    ofPoint a;
    ofPoint b;
};

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
    ofImage mainbg;
    ofImage bg1;
    ofImage bg2;
    ofImage bg3;
    
    //GUI
    void button1Pressed();
    void button2Pressed();
    void button3Pressed();
    void buttonResetPressed();
    
    ofxPanel gui;
    ofxButton button1;
    ofxButton button2;
    ofxButton button3;
    ofxButton buttonReset;
    
    //status
    int current = 0;
    
    //01: Loki
    int gridX;
    int gridY;
    float waveHeight;
    float baseHeight;
    
    ofPath path;
    ofColor stroke_color;
    ofColor fill_color;
    
    ofColor bg_color;
    ofColor fbo_color;
    
    ofPixels pix;
    
    //02: spider man
    ofVec2f center2;
    vector <vector <ofVec2f> > points2;
    float nextPointSpeed;
    ofPath outline;
    
    //lines
    vector < ofPoint > drawnPoints;
    vector <Line> lines;
		
};



