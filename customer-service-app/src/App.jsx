import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerRegistration from './components/CustomerRegistration';
import ServiceRecordForm from './components/ServiceRecordForm';
import CustomerDetails from './components/CustomerDetails';
import SearchBar from './components/SearchBar';
import VisitHistory from './components/VisitHistory';
import ServiceList from './components/ServiceList';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Customer Service Management</h1>
        <SearchBar />
        <Switch>
          <Route path="/register" component={CustomerRegistration} />
          <Route path="/service-record" component={ServiceRecordForm} />
          <Route path="/customer-details" component={CustomerDetails} />
          <Route path="/visit-history" component={VisitHistory} />
          <Route path="/service-list" component={ServiceList} />
          <Route path="/" exact>
            <h2>Welcome to the Customer Service Management App</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;