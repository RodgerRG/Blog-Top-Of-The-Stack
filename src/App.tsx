import { Box, Container } from '@mui/material';
import { Routes } from 'react-router-dom';
import { Footer } from './Common/Components/Footer';
import { Header } from './Common/Components/Header';
import { NavBar } from './Common/Components/NavBar';
import { generateRoutes } from './Common/Routing/GenerateRoutes';

const App = () => {
  return <Container>
    <Header title="Top of the Stack"/>
    <NavBar />
    <Box>
      <Routes>
        {generateRoutes()}
      </Routes>
    </Box>
    <Footer versionNumber='0.0.1'/>
  </Container>
}

export default App;
