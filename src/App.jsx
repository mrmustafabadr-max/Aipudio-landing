function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050816',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <img
        src="/images/logo.png"
        alt="Aipudio"
        style={{
          width: '180px',
          marginBottom: '30px'
        }}
      />

      <h1
        style={{
          fontSize: '48px',
          maxWidth: '900px',
          lineHeight: '1.3'
        }}
      >
        فيديوهات AI سينمائية تجعل مشروعك يظهر بشكل احترافي
      </h1>

      <p
        style={{
          marginTop: '20px',
          color: '#b3b3b3',
          maxWidth: '700px',
          fontSize: '20px'
        }}
      >
        إنتاج Reels احترافية للمطاعم والعقارات ومنتجات التجميل بجودة سينمائية.
      </p>

      <a
        href="https://wa.me/201005825888"
        style={{
          marginTop: '40px',
          background: '#7c3aed',
          color: 'white',
          padding: '18px 40px',
          borderRadius: '999px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '18px'
        }}
      >
        ابدأ الآن
      </a>
    </div>
  )
}

export default App
