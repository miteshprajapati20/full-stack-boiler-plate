import '../style/Home.css';
import { useState } from 'react';

export default function Home(){

    const [faqData, setFaqData] = useState([
        {
          question: "How secure is my medical data?",
          answer: "Your medical data is protected with enterprise-grade encryption and complies with HIPAA regulations. We use secure servers and regular security audits to ensure your information remains private and protected.",
          open: false,
        },
        {
          question: "Can I share access with my family members?",
          answer: "Yes, our Pro and Enterprise plans include family sharing features. You can grant access to family members or caregivers while maintaining control over what information they can view and manage.",
          open: false,
        },
        {
          question: "How do medication reminders work?",
          answer: "Medication reminders can be customized to your schedule. You'll receive notifications through the app, email, or SMS based on your preferences. The system is smart enough to adjust to time zones and daily routines.",
          open: false,
        },
        {
          question: "Can I export my health data?",
          answer: "Yes, you can export your health data in various formats including PDF and CSV. This makes it easy to share reports with healthcare providers or keep personal records.",
          open: false,
        },
        {
          question: "What happens if I miss a medication reminder?",
          answer: "If you miss a reminder, the app will send follow-up notifications based on your settings. Designated family members or caregivers can also be notified if you consistently miss medications.",
          open: false,
        },
    ]);

    function toggleFaq(index){
        setFaqData(faqData.map((faq, i) => {
            if(faq.open && i !== index){
                return { ...faq, open: false };
            }
            if (i === index) {
                return { ...faq, open: !faq.open };
            }
            return faq;
        }))
    }

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
                
                    <div div className="hiw-details-container">
                        <h1 className="hiw-title">How It Works</h1>
                        <p className="hiw-desc">Simple steps to manage your medications effectively</p>
                    </div>

                    <div className="hiw-sub-container">
                        <div className="hiw-inner-container-1">
                            <div className='hiw-box'>
                                <h3 className='hiw-box-step'>1. Create Your Profile</h3>
                                <p className='hiw-box-desc'>Set up your personal health profile with current medications and health conditions</p>
                                <div className='hiw-box-circle'><span>1</span></div>
                            </div>
                            <div className='hiw-box third-box'>
                                <h3 className='hiw-box-step'>3. Set Reminders</h3>
                                <p className='hiw-box-desc'>Configure smart reminders that adapt to your daily schedule</p>
                                <div className='hiw-box-circle'><span>3</span></div>
                            </div>

                            <div className='hiw-box second-box'>
                                <div className='hiw-box-circle'><span>2</span></div>
                                <h3 className='hiw-box-step'>2. Add Medications</h3>
                                <p className='hiw-box-desc'>Input your medication details including dosage, frequency, and special instructions</p>
                            </div>
                        </div>

                        <div className='hiw-middle-line'></div>

                        <div className="hiw-inner-container-2">
                            <div className='hiw-box second-box'>
                                <div className='hiw-box-circle'><span>2</span></div>
                                <h3 className='hiw-box-step'>2. Add Medications</h3>
                                <p className='hiw-box-desc'>Input your medication details including dosage, frequency, and special instructions</p>
                            </div>
                            <div className='hiw-box third-box'>
                                <h3 className='hiw-box-step'>3. Set Reminders</h3>
                                <p className='hiw-box-desc'>Configure smart reminders that adapt to your daily schedule</p>
                                <div className='hiw-box-circle'><span>3</span></div>
                            </div>
                            <div className='hiw-box'>
                                <div className='hiw-box-circle'><span>4</span></div>
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

            <div className="benifit-container">

                <div className="benifit-details">
                    <h1 className="benifit-title">Why Choose MedTracker</h1>
                    <p className="benifit-description">Experience the benefits of smart medication management</p>
                </div>

                <div className="benifit-box-container">

                    <div className='benifit-container-left'> 
                        <div className="benifit-box">
                            <svg className="improvment" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="benifit-box-title">Improved Medication Adherence</h3>
                            <p className="benifit-box-description">Stay on track with your medication schedule and never miss a dose with our smart reminder system</p>
                        </div>

                        <div className="benifit-box">
                            <svg className="health-insights" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <h3 className="benifit-box-title">Real-time Health Insights</h3>
                            <p className="benifit-box-description">Get valuable insights into your health patterns and medication effectiveness</p>
                        </div>

                        <div className="benifit-box">
                            <svg className="family" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <h3 className="benifit-box-title">Family Care Coordination</h3>
                            <p className="benifit-box-description">Easily coordinate care with family members and healthcare providers</p>
                        </div>

                    </div>

                    <div className='benifit-container-right'>

                        <div className="benifit-box">
                            <svg className="warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <h3 className="benifit-box-title">Drug Interaction Warnings</h3>
                            <p className="benifit-box-description">Get instant alerts about potential drug interactions and side effects</p>
                        </div>

                        <div className="benifit-box">
                            <svg className="report" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <h3 className="benifit-box-title">Comprehensive Reports</h3>
                            <p className="benifit-box-description">Generate detailed health reports for better medical consultations</p>
                        </div>

                        <div className="benifit-box">
                            <svg className="secure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            <h3 className="benifit-box-title">Secure Data Protection</h3>
                            <p className="benifit-box-description">Your health data is protected with enterprise-grade security measures</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className="review-container">

                <div className="review-details">
                    <h1 className="review-title">What Our Users Say</h1>
                    <p className="review-description">Real experiences from people who trust MedTracker</p>
                </div>

                <div className="review-box-container">

                    <div className="review-box">
                        <div className="user-details">
                            <div className='user-image first'>
                                <h2 className='user-logo'>SJ</h2>
                            </div>
                            <div className='user-info'>
                                <h3 className='user-name'>Sarah Johnson</h3>
                                <p className='user-role'>Chronic Care Patient</p>
                            </div>
                        </div>
                        <div className='review-content'>
                            <p className='review-desc'>"MedTracker has completely transformed how I manage my medications. The reminders are reliable, and the interface is so intuitive. I haven't missed a single dose since I started using it!"</p>
                            {Array(5).fill().map((_, index) => (
                                <svg key={index} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="review-box">
                        <div className="user-details">
                            <div className='user-image second'>
                                <h2 className='user-logo'>MD</h2>
                            </div>
                            <div className='user-info'>
                                <h3 className='user-name'>Michael Davis</h3>
                                <p className='user-role'>Caregiver</p>
                            </div>
                        </div>
                        <div className='review-content'>
                            <p className='review-desc'>"As a caregiver for my elderly mother, this app has been a lifesaver. The family sharing feature helps us coordinate her care perfectly. Highly recommended!"</p>
                            {Array(5).fill().map((_, index) => (
                                <svg key={index} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                        </div>
                    </div>

                    <div className="review-box">
                        <div className="user-details">
                            <div className='user-image third'>
                                <h2 className='user-logo'>EW</h2>
                            </div>
                            <div className='user-info'>
                                <h3 className='user-name'>Emma Wilson</h3>
                                <p className='user-role'>Healthcare Professional</p>
                            </div>
                        </div>
                        <div className='review-content'>
                            <p className='review-desc'>"I recommend MedTracker to all my patients. The detailed reports help me monitor their progress effectively, and the interface is user-friendly for all age groups."</p>
                            {Array(5).fill().map((_, index) => (
                                <svg key={index} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-container">

                <div className="faq-details">
                    <h1 className="faq-title">Frequently Asked Questions</h1>
                    <p className="faq-description">Find answers to common questions about MedTracker</p>
                </div>

                <div className="faq-box-container">
                    {
                        faqData.map((faq, index) => (
                            <div className="faq-box" key={index}>
                                <div className='faq-question-container' onClick={() => toggleFaq(index)}>
                                    <h3 className="faq-question">{faq.question}</h3>
                                    <svg className={`${faq.open ? 'svg-rotate' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                                <p className={`faq-ans ${faq.open ? 'show' : ''}`}>{faq.answer}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
            
            <div className='contact-container'>
                <div className="contact-details">
                    <h1 className="contact-title">Get In Touch</h1>
                    <p className="contact-description">Have questions? We're here to help.</p>
                </div>

                <div className='contact-box-container'>

                    <div className='contact-details-container'>
                        <div className='contact-info'>
                            <h3 className='contact-info-title'>Contact Information</h3>

                            <div className='contact-details'>
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <p className='contact-content'>1-800-MEDTRACK</p>
                            </div>

                            <div className='contact-details'>
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <p className='contact-content'>support@medtracker.com</p>
                            </div>

                            <div className='contact-details'>
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p className='contact-content'>123 Health Street, Medical District, NY 10001</p>
                            </div>

                        </div>
                        <div className='timing-info'>
                            <h3 className='timing-info-title'>Office Hours</h3>
                            <div className='timing-details'>
                                <p className='timing-content'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className='timing-content'>Saturday: 10:00 AM - 4:00 PM</p>
                                <p className='timing-content'>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className='contact-form'>
                        <form className='contact-form-container'>
                            <div className='form-group'>
                                <label htmlFor='name'>Full Name</label>
                                <input type='text' id='name' name='name' placeholder='Enter your name' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email' id='email' name='email' placeholder='Enter your email' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='subject'>Subject</label>
                                <select name="subject" id="subject">
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="Billing Support">Billing Support</option>
                                    <option value="Partnership Oppertunity">Partnership Oppertunity</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' name='message' placeholder='Enter your message' required></textarea>
                            </div>
                            <button type='submit' className='contact-btn'>Submit</button>
                        </form>
                    </div>
                    
                </div>

            </div>

            <div className="footer-container">
                <div className='footer-content-container'>
                    <div className='project-details'>
                        <h2 className='project-title'>MedTracker</h2>
                        <p className='project-desc'>Empowering better health through smart medication management.</p>
                        <div className='socialmedia-icons'>
                            <svg className="facebook" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            <svg className="twitter" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                            <svg className="linkedin" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                        </div>
                    </div>
                
                    <div className='quick-links'>
                        <div className='quick-links-content'>
                            <h2 className='quick-links-title'>Quick Links</h2>
                            <p>Home</p>
                            <p>Features</p>
                            <p>How It Works</p>
                            <p>Benefits</p>
                            <p>Testimonials</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div className='legal'>
                        <div className='legal-content'>
                            <h2 className='legal-title'>Legal</h2>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Support</p>
                        </div>
                    </div>

                    <div className='newsletter'>
                        <div className='newsletter-content'>
                            <h2 className='newsletter-title'>Newsletter</h2>
                            <p>Stay updated with our latest features and releases.</p>
                            <div className='subscribe-box'>
                                <input type="text" placeholder='Enter email'/>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyrights'>
                    <div className='line'></div>
                    <p className='copyright-content'>© MedTracker. All rights reserved.</p>
                </div>
            </div> 


        </div>
    )
}