import { BrowserRouter as Router, Route } from 'react-router-dom';


<Router>
<Route exact path='/home' component={Home} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contacts' component={Contacts} />
</Router>