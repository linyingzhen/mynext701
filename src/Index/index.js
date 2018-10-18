import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

export default () => (
  <div>
    <Header title="首页" />
    <Navbar />
    <p>index</p>
    <div className="testvw">testvw</div>
    <style jsx>{`
      .style-000000 {
      }
      .testvw {
        width: 4rem;
        height: 1rem;
        background: #ccc;
      }
    `}</style>
    <style jsx global>{`
      .style-000000 {
      }
      html {
        font-size: 13.3333vw !important;
      }
      body {
        font-size: .3rem;
      }
    `}</style>
  </div>
);
