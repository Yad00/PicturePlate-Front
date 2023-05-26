import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomePage from './HomePage';
import Success from './Success';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
