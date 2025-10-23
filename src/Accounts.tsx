import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonSearchbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonPage
} from '@ionic/react';
import { informationCircle } from 'ionicons/icons';
import './Accounts.css';

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  balance: string;
  currency: string;
}

const Accounts: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  // Sample account data based on the image
  const accounts: Account[] = [
    { id: '1', name: 'CORONADO COMMUNIT...', accountNumber: '4132', balance: '100,000.00', currency: 'USD' },
    { id: '2', name: 'NKMumbai India', accountNumber: '8488', balance: '94,080,453.99', currency: 'USD' },
    { id: '3', name: 'DAVID CHRISTOPHER INC', accountNumber: '4220', balance: '683,388.09', currency: 'USD' },
    { id: '4', name: 'FICTIONWISE LLC', accountNumber: '3209', balance: '5,735.38', currency: 'USD' },
    { id: '5', name: 'ULI RX INC', accountNumber: '2571', balance: '545,735.11', currency: 'USD' },
    { id: '6', name: 'TECH SOLUTIONS CORP', accountNumber: '1234', balance: '1,250,000.00', currency: 'USD' },
    { id: '7', name: 'GLOBAL ENTERPRISES', accountNumber: '5678', balance: '2,500,000.00', currency: 'USD' },
    { id: '8', name: 'INNOVATION LABS', accountNumber: '9012', balance: '750,000.00', currency: 'USD' }
  ];

  const totalBalance = '82,847,189.44';
  const moneyIn = '20,696,898.73';
  const moneyOut = '35,277,423.07';

  const filteredAccounts = accounts.filter(account => 
    account.name.toLowerCase().includes(searchText.toLowerCase()) ||
    account.accountNumber.includes(searchText)
  );

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonGrid className='ion-header' style={{paddingBottom: '0px'}}>
            <IonRow>
              <IonCol size="10" style={{ textAlign: 'left' }}>
                <IonTitle className="accounts-title">Accounts</IonTitle>
              </IonCol>
              <IonCol size="1"><img src="Alerts.svg" height="25" alt="Alerts" /></IonCol>
              <IonCol size="1"><img src="Settings.svg" height="25" alt="Settings" /></IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonSearchbar 
                  value={searchText}
                  onIonInput={(e) => setSearchText(e.detail.value!)}
                  placeholder="Search"
                  className="accounts-search-header"
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="accounts-content">

        {/* Overview Section */}
        <div className="overview-section">
          <h2 className="section-title">Overview</h2>
          
          <div className="total-balances">
            <div className="balance-header">
              <span className="balance-label">TOTAL AVAILABLE BALANCES</span>
              <IonIcon icon={informationCircle} className="info-icon" />
            </div>
            <div className="balance-amount">
              <span className="amount">{totalBalance}</span>
              <span className="currency">USD</span>
            </div>
          </div>

          <div className="money-movement">
            <div className="movement-row">
              <span className="movement-label">Money in (Last 30 days)</span>
              <span className="movement-amount">{moneyIn} USD</span>
            </div>
            <div className="movement-row">
              <span className="movement-label">Money out (Last 30 days)</span>
              <span className="movement-amount">{moneyOut} USD</span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="separator"></div>

        {/* Deposit Accounts Section */}
        <div className="deposit-accounts-section">
          <div className="deposit-header">
            <h2 className="section-title">Deposit Accounts</h2>
            <IonChip className="account-count-chip">
              <span>{accounts.length}</span>
            </IonChip>
          </div>
          
          <div className="deposit-total">
            <span className="deposit-balance">{totalBalance} USD</span>
          </div>
        </div>

        {/* Separator */}
        <div className="separator"></div>

        {/* Account List */}
        <IonList className="account-list">
          {filteredAccounts.map((account) => (
            <IonItem key={account.id} className="account-item" button>
              <IonLabel className="account-label">
                <div className="account-name">
                  {account.name} ({account.accountNumber})
                </div>
              </IonLabel>
              <div className="account-balance" slot="end">
                {account.balance} {account.currency}
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default Accounts;
