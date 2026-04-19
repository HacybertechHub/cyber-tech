import React, { useState } from 'react';

const HacyberUniversalVerifier = () => {
  const [platform, setPlatform] = useState('Shipt');

  // Extended list of 2026 Gig Apps
  const platformOptions = [
    "Shipt Shopper", "Instacart", "DoorDash", "Uber Eats", 
    "Amazon Flex", "Walmart Spark", "Grubhub", "Gopuff", 
    "Roadie (Medical)", "DeliverThat (Catering)", "Jitsu", 
    "Skipcart", "GoShare", "TaskRabbit", "Field Agent"
  ];

  return (
    <div style={styles.container}>
      <style>
        {`
          .cyber-select {
            background: #111;
            color: #00f2ff;
            border: 1px solid #333;
            padding: 10px;
            width: 100%;
            font-family: inherit;
            margin-bottom: 20px;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
          }
          .cyber-select:focus { border-color: #00f2ff; box-shadow: 0 0 10px rgba(0, 242, 255, 0.3); }
          .wipe-scheme-badge {
            background: rgba(0, 200, 255, 0.1);
            border: 1px solid #00f2ff;
            box-shadow: 0 0 15px rgba(0, 242, 255, 0.5);
            color: #fff;
            text-transform: uppercase;
            padding: 12px 24px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            display: inline-block;
            margin-top: 10px;
          }
          .wipe-scheme-badge:hover { box-shadow: 0 0 25px rgba(0, 242, 255, 0.8); background: rgba(0, 200, 255, 0.2); }
          .success-text { color: #00ff66; font-weight: bold; }
          .alert-text { color: #ff3333; font-weight: bold; }
        `}
      </style>

      {/* Dynamic Header */}
      <div style={styles.header}>
        <pre style={styles.asciiHeader}>
{`        ████████████████████████████
        █   HACYBER ELITE PORTAL   █
        █      SYSTEM VERIFIER     █
        ████████████████████████████`}
        </pre>
      </div>

      {/* Select App Menu */}
      <div style={styles.section}>
        <label style={styles.label}>SELECT TARGET PLATFORM</label>
        <select 
          className="cyber-select" 
          value={platform} 
          onChange={(e) => setPlatform(e.target.value)}
        >
          {platformOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      <div style={styles.reportArea}>
        <div style={styles.section}>
          <p>📧 Email Queried: ivymorenoh@gmail.com</p>
          <p>🔍 Platform Checked: {platform} (Simulated)</p>
          <p>📅 Timestamp: {new Date().toLocaleString()}</p>
        </div>

        <hr style={styles.divider} />

        <div style={styles.section}>
          <h3 style={styles.heading}>📡 ACCOUNT MATCH STATUS</h3>
          <p>• Result: <span className="success-text">MATCH IDENTIFIED</span></p>
          <p>• Linked Service: {platform.toUpperCase()}</p>
          <p>• Profile Status: <span className="alert-text">DEACTIVATED / FLAGGED</span></p>
        </div>

        <hr style={styles.divider} />

        <div style={styles.section}>
          <h3 style={styles.heading}>🛠️ DATABASE ERASURE TOOL</h3>
          <p>Module: <strong>WIPE SCHEME</strong></p>
          <p>Status: <span style={{color: '#ffcc00'}}>PENDING AUTHORIZATION</span></p>
          
          <button className="wipe-scheme-badge">
            INITIATE [WIPE SCHEME]
          </button>
        </div>
      </div>

      <div style={styles.noticeBox}>
        <h4 style={{ color: '#ffcc00', margin: '0 0 5px 0' }}>⚠️ NOTICE</h4>
        <p style={{ margin: 0, fontSize: '0.8em', opacity: 0.7 }}>
          Fictional UI preview for HACYBERGLOBALTECH™. No actual data modified.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#050505', color: '#e0e0e0', fontFamily: '"Courier New", Courier, monospace', padding: '25px', borderRadius: '8px', border: '1px solid #222', maxWidth: '550px', margin: '20px auto' },
  header: { textAlign: 'center', marginBottom: '20px' },
  asciiHeader: { color: '#00f2ff', fontSize: '10px', lineHeight: '1.2' },
  section: { marginBottom: '15px' },
  label: { display: 'block', fontSize: '0.8em', color: '#888', marginBottom: '8px', letterSpacing: '1px' },
  heading: { color: '#00f2ff', fontSize: '1em', marginBottom: '10px' },
  divider: { borderColor: '#333', borderStyle: 'dashed', margin: '20px 0' },
  reportArea: { border: '1px solid #111', padding: '15px', background: '#080808' },
  noticeBox: { borderLeft: '3px solid #ffcc00', padding: '10px', marginTop: '20px', background: 'rgba(255,204,0,0.02)' }
};

export default HacyberUniversalVerifier;
