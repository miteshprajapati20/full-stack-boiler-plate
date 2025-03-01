import '../style/Home.css';

export default function Home(){
    return (
        <div className="home-container">
            <div className="detail-container">
                <div className="left-container">
                    <h1 className="sub-title-1">Track Your Medications <br /> <span className="sub-title-2">Stay Healthy</span></h1>
                    <p className="home-description">2025 Never miss a dose again. Smart reminders, easy tracking, and health monitoring all in one place.</p>
                    <div className="btn-container">
                        <button className="btn-getstart">Get Started</button>
                        <button className="btn-lernmore">Learn More</button>
                    </div>
                </div>
                
                <div className="right-container">
                    <div className="stats-container-main">
                        <div className="stats-container-secondary">
                            <div className="stats-box">
                                <h2 className="stats-value">98%</h2>
                                <p className="stats-label">Medication Adherence</p>
                            </div>
                            <div className="stats-box">
                                <h2 className="stats-value">24/7</h2>
                                <p className="stats-label">Health Monitoring</p>
                            </div>
                            <div className="stats-box">
                                <h2 className="stats-value">5k+</h2>
                                <p className="stats-label">Active Users</p>
                            </div>
                            <div className="stats-box">
                                <h2 className="stats-value">100%</h2>
                                <p className="stats-label">Security</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature-container">

                <div className="feature-details">
                    <h1 className="feature-title">Powerful Features</h1>
                    <p className="feature-description">Everything you need to manage your medications effectively</p>
                </div>

                <div className="feature-box-container">

                    <div className="feature-box">
                        <svg className="reminder" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="feature-box-title">Smart Reminders</h3>
                        <p className="feature-box-description">Never miss a dose with intelligent medication reminders and scheduling</p>
                    </div>

                    <div className="feature-box">
                        <svg className="tracking" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        <h3 className="feature-box-title">Health Tracking</h3>
                        <p className="feature-box-description">Monitor your vital signs and health metrics in real-time</p>
                    </div>

                    <div className="feature-box">
                        <svg className="secure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        <h3 className="feature-box-title">Secure Data</h3>
                        <p className="feature-box-description">Your health data is encrypted and protected with military-grade security</p>
                    </div>
                    
                    <div className="feature-box">
                        <svg className="family" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        <h3 className="feature-box-title">Family Sharing</h3>
                        <p className="feature-box-description">Share medication schedules with family members and caregivers</p>
                    </div>

                    <div className="feature-box">
                        <svg className="alert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                        <h3 className="feature-box-title">Smart Alerts</h3>
                        <p className="feature-box-description">Receive intelligent alerts for refills and potential drug interactions</p>
                    </div>

                    <div className="feature-box">
                        <svg className="report" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <h3 className="feature-box-title">Progress Reports</h3>
                        <p className="feature-box-description">Generate detailed health reports to share with your healthcare providers</p>
                    </div>

                </div>

            </div>



            <div className='hiw-container'>
                <div className='hiw-inner-container'>
                
                    <div div class="hiw-details-container">
                        <h1 class="hiw-title">How It Works</h1>
                        <p class="hiw-desc">Simple steps to manage your medications effectively</p>
                    </div>

                    <div class="hiw-sub-container">
                        <div class="hiw-inner-container-1">
                            <div className='hiw-box'>
                                <h3 className='hiw-box-step'>1. Create Your Profile</h3>
                                <p className='hiw-box-desc'>Set up your personal health profile with current medications and health conditions</p>
                                <div className='hiw-box-circle'></div>
                            </div>
                            <div className='hiw-box'>
                                <h3 className='hiw-box-step'>3. Set Reminders</h3>
                                <p className='hiw-box-desc'>Configure smart reminders that adapt to your daily schedule</p>
                                <div className='hiw-box-circle'></div>
                            </div>
                        </div>

                        <div className='hiw-middle-line'></div>

                        <div class="hiw-inner-container-2">
                            <div className='hiw-box'>
                                <div className='hiw-box-circle'></div>
                                <h3 className='hiw-box-step'>2. Add Medications</h3>
                                <p className='hiw-box-desc'>Input your medication details including dosage, frequency, and special instructions</p>
                            </div>
                            <div className='hiw-box'>
                                <div className='hiw-box-circle'></div>
                                <h3 className='hiw-box-step'>4. Track Progress</h3>
                                <p className='hiw-box-desc'>Monitor your medication adherence and health metrics in real-time</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className='hiw-btn-container'>
                    <button className='hiw-btn'>
                        Get Started
                    </button>
                </div>

            </div>

            
        </div>
    )
}