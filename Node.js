// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock database for features
const features = {
    techniques: {
        title: "Self-Defense Techniques",
        content: `
            <div class="technique-container">
                <h3 style="color: var(--accent); margin-bottom: 15px;">Essential Moves Everyone Should Know</h3>
                
                <div class="technique-item" style="margin-bottom: 25px;">
                    <h4 style="color: var(--white); margin-bottom: 10px;">1. Wrist Release</h4>
                    <div style="display: flex; gap: 20px; margin-bottom: 15px;">
                        <img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                             alt="Wrist Release" style="width: 200px; border-radius: var(--border-radius-sm);">
                        <div>
                            <p style="margin-bottom: 10px;">Step 1: Twist your wrist against the attacker's thumb (the weakest point)</p>
                            <p style="margin-bottom: 10px;">Step 2: Pull your arm sharply toward you</p>
                            <p>Step 3: Follow up with a counterattack if needed</p>
                        </div>
                    </div>
                    <button class="btn" style="margin-top: 10px;" onclick="alert('Practice this move 10 times daily!')">
                        <i class="fas fa-video"></i> Watch Video Demo
                    </button>
                </div>
                
                <div class="technique-item">
                    <h4 style="color: var(--white); margin-bottom: 10px;">2. Front Choke Defense</h4>
                    <div style="display: flex; gap: 20px;">
                        <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                             alt="Choke Defense" style="width: 200px; border-radius: var(--border-radius-sm);">
                        <div>
                            <p style="margin-bottom: 10px;">Step 1: Tuck your chin to protect your airway</p>
                            <p style="margin-bottom: 10px;">Step 2: Raise both arms up between the attacker's arms</p>
                            <p style="margin-bottom: 10px;">Step 3: Swing your arms outward to break the hold</p>
                            <p>Step 4: Strike vulnerable areas (eyes, nose, groin)</p>
                        </div>
                    </div>
                    <button class="btn" style="margin-top: 10px;" onclick="alert('Practice with a partner safely!')">
                        <i class="fas fa-video"></i> Watch Video Demo
                    </button>
                </div>
            </div>
        `
    },
    tips: {
        title: "Safety Tips & Strategies",
        content: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="tip-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: var(--border-radius-sm);">
                    <h4 style="color: var(--accent); margin-bottom: 10px;"><i class="fas fa-walking"></i> Walking Alone</h4>
                    <ul style="padding-left: 20px; color: rgba(255,255,255,0.8);">
                        <li style="margin-bottom: 8px;">Stay in well-lit areas</li>
                        <li style="margin-bottom: 8px;">Keep headphones volume low</li>
                        <li style="margin-bottom: 8px;">Vary your routine</li>
                        <li>Have your keys ready before reaching your destination</li>
                    </ul>
                </div>
                
                <div class="tip-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: var(--border-radius-sm);">
                    <h4 style="color: var(--accent); margin-bottom: 10px;"><i class="fas fa-car"></i> Vehicle Safety</h4>
                    <ul style="padding-left: 20px; color: rgba(255,255,255,0.8);">
                        <li style="margin-bottom: 8px;">Check back seat before entering</li>
                        <li style="margin-bottom: 8px;">Lock doors immediately</li>
                        <li style="margin-bottom: 8px;">Park near surveillance cameras</li>
                        <li>Keep valuables out of sight</li>
                    </ul>
                </div>
                
                <div class="tip-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: var(--border-radius-sm);">
                    <h4 style="color: var(--accent); margin-bottom: 10px;"><i class="fas fa-home"></i> Home Security</h4>
                    <ul style="padding-left: 20px; color: rgba(255,255,255,0.8);">
                        <li style="margin-bottom: 8px;">Install motion-sensor lights</li>
                        <li style="margin-bottom: 8px;">Use timers for lights when away</li>
                        <li style="margin-bottom: 8px;">Don't hide spare keys outside</li>
                        <li>Get to know your neighbors</li>
                    </ul>
                </div>
                
                <div class="tip-card" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: var(--border-radius-sm);">
                    <h4 style="color: var(--accent); margin-bottom: 10px;"><i class="fas fa-users"></i> Social Situations</h4>
                    <ul style="padding-left: 20px; color: rgba(255,255,255,0.8);">
                        <li style="margin-bottom: 8px;">Watch your drink at all times</li>
                        <li style="margin-bottom: 8px;">Have a code word with friends</li>
                        <li style="margin-bottom: 8px;">Trust your instincts</li>
                        <li>Practice assertive communication</li>
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 30px; background: rgba(255,77,109,0.1); padding: 20px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--secondary);">
                <h4 style="color: var(--secondary); margin-bottom: 10px;">Remember:</h4>
                <p style="color: rgba(255,255,255,0.9);">Your safety is more important than being polite. It's okay to make a scene if you feel threatened.</p>
            </div>
        `
    },
    emergency: {
        title: "Emergency Action Plan",
        content: `
            <div style="margin-bottom: 30px;">
                <h3 style="color: var(--accent); margin-bottom: 15px;">Create Your Personal Plan</h3>
                
                <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1;">
                        <h4 style="color: var(--white); margin-bottom: 10px;">1. Safe Places</h4>
                        <textarea id="safePlaces" placeholder="Identify safe places along your daily routes (police stations, open businesses, etc.)" 
                                  style="width: 100%; height: 100px; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); 
                                  border-radius: var(--border-radius-sm); color: white;"></textarea>
                    </div>
                    
                    <div style="flex: 1;">
                        <h4 style="color: var(--white); margin-bottom: 10px;">2. Emergency Contacts</h4>
                        <textarea id="emergencyContacts" placeholder="List contacts you can call in an emergency (local police, trusted friends/family)" 
                                  style="width: 100%; height: 100px; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); 
                                  border-radius: var(--border-radius-sm); color: white;"></textarea>
                    </div>
                </div>
                
                <button class="btn" onclick="savePlan()" style="margin-top: 10px;">
                    <i class="fas fa-save"></i> Save My Plan
                </button>
            </div>
            
            <div>
                <h3 style="color: var(--accent); margin-bottom: 15px;">Find Local Training</h3>
                <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                    <input type="text" id="locationInput" placeholder="Enter your location (city or zip)" 
                           style="flex: 1; padding: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); 
                           border-radius: var(--border-radius-sm); color: white;">
                    <button class="btn" onclick="findTraining()">
                        <i class="fas fa-search"></i> Search
                    </button>
                </div>
                
                <div id="trainingResults" style="margin-top: 20px;">
                    <!-- Results will appear here -->
                    <p style="color: rgba(255,255,255,0.6);">Enter your location to find certified self-defense classes near you.</p>
                </div>
            </div>
            
            <script>
                function savePlan() {
                    const safePlaces = document.getElementById('safePlaces').value;
                    const emergencyContacts = document.getElementById('emergencyContacts').value;
                    
                    // In a real app, this would save to a database
                    alert('Plan saved successfully!');
                    console.log({safePlaces, emergencyContacts});
                }
                
                function findTraining() {
                    const location = document.getElementById('locationInput').value;
                    const results = document.getElementById('trainingResults');
                    
                    if (!location) {
                        alert('Please enter a location');
                        return;
                    }
                    
                    results.innerHTML = '<p style="color: var(--white);">Searching for classes near ' + location + '...</p>';
                    
                    // Simulate API call
                    setTimeout(() => {
                        results.innerHTML = \`
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: var(--border-radius-sm);">
                                <h4 style="color: var(--accent); margin-bottom: 10px;">Results for \${location}:</h4>
                                <ul style="list-style: none;">
                                    <li style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                        <strong>Urban Self-Defense Academy</strong><br>
                                        <span style="color: rgba(255,255,255,0.7);">123 Safety St, \${location}</span><br>
                                        <button class="btn" style="padding: 5px 10px; font-size: 0.8rem; margin-top: 5px;">View Details</button>
                                    </li>
                                    <li style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                        <strong>Women's Empowerment Defense</strong><br>
                                        <span style="color: rgba(255,255,255,0.7);">456 Protection Ave, \${location}</span><br>
                                        <button class="btn" style="padding: 5px 10px; font-size: 0.8rem; margin-top: 5px;">View Details</button>
                                    </li>
                                    <li>
                                        <strong>Krav Maga \${location}</strong><br>
                                        <span style="color: rgba(255,255,255,0.7);">789 Defense Blvd, \${location}</span><br>
                                        <button class="btn" style="padding: 5px 10px; font-size: 0.8rem; margin-top: 5px;">View Details</button>
                                    </li>
                                </ul>
                            </div>
                        \`;
                    }, 1500);
                }
            </script>
        `
    }
};

// API Routes
app.get('/api/features/:feature', (req, res) => {
    const feature = req.params.feature;
    
    if (features[feature]) {
        // Simulate slight delay for realism
        setTimeout(() => {
            res.json(features[feature]);
        }, 500);
    } else {
        res.status(404).json({ error: 'Feature not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});