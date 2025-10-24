import React from 'react';
import { 
  IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButton, 
  IonIcon,
  IonItem,
  IonLabel
} from '@ionic/react';
import { close } from 'ionicons/icons';
import './MoreModal.css';

interface MoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MoreModal: React.FC<MoreModalProps> = ({ isOpen, onClose }) => {
  const handleAccessClick = () => {
    window.open('https://access-mobile-web.onrender.com/', '_self');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    // Add settings functionality here
  };

  const handleSupportClick = () => {
    console.log('Support clicked');
    // Add support functionality here
  };

  const handleNotificationsClick = () => {
    console.log('Notifications clicked');
    // Add notifications functionality here
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="more-modal">
      
      <IonContent className="more-modal-content">
        <div className="tab-extension-content">
          {/* Access Section */}
          <div className="tab-extension-section">
            <div className="tab-extension-title">Experiences</div>
            <div className="tab-extension-row">
              <div className="tab-extension-item" onClick={handleAccessClick}>
                <img src="AccessLineLogoThick.svg" alt="Access" className="tab-extension-app-icon" />
                <div className="tab-extension-label">Access</div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="tab-extension-section">
            <div className="tab-extension-title">Services</div>
            <div className="tab-extension-row">
              <div className="tab-extension-item" onClick={handleSettingsClick}>
                <img src="Settings.svg" alt="Settings" className="tab-extension-icon" />
                <div className="tab-extension-label">Settings</div>
              </div>
              
              <div className="tab-extension-item" onClick={handleSupportClick}>
                <img src="Phone.svg" alt="Support" className="tab-extension-icon" />
                <div className="tab-extension-label">Support</div>
              </div>
              
              <div className="tab-extension-item" onClick={handleNotificationsClick}>
                <img src="Alert.svg" alt="Notifications" className="tab-extension-icon" />
                <div className="tab-extension-label">Notifications</div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default MoreModal;
