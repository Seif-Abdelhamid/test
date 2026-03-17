import { useEffect } from 'react';

export default function LocationsPage() {
  useEffect(() => { document.title = 'Locations | OMGyro Halal'; }, []);

  return (
    <main className="site-content__main page-id--1001174">

      <section className="content container locations-page locations-page--full-width" style={{ padding: '40px 20px 60px' }}>
        <div className="locations-container" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>

          {/* Location List on Left */}
          <div className="locations-list" style={{ flex: '0 0 450px', background: 'linear-gradient(180deg, #fff 0%, #fffbf9 100%)', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,102,0,0.1)', maxHeight: '750px', overflowY: 'auto', position: 'sticky', top: '20px' }}>

            {/* South Orange, NJ */}
            <div className="location-item" data-lat="40.7489" data-lng="-74.2610" style={{ marginBottom: '30px', padding: '25px', border: '2px solid #f0f0f0', borderRadius: '10px', background: '#ffffff', transition: 'all 0.3s ease', cursor: 'default' }}>
              <h2 className="h2" style={{ color: 'var(--omgyro-orange)', marginBottom: '15px', fontSize: '22px', fontWeight: 600, transition: 'color 0.3s ease' }}>📍 South Orange, NJ</h2>
              <p style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '14px', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--omgyro-black)', fontSize: '15px', display: 'block', marginBottom: '8px' }}>Hours</strong>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Sunday-Tuesday: 10:30am - 1:00am</span>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Wednesday-Thursday: 10:30am - 2:00am</span>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Friday-Saturday: 10:30am - 3:00am</span>
              </p>
              <div className="location-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px', alignItems: 'center', width: '100%' }}>
                <a href="https://maps.google.com/?q=OMGyro+South+Orange+NJ" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', boxSizing: 'border-box', border: 'none', margin: 0 }}>View on Map</a>
                <a href="https://omgyrohalal.square.site/" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', boxSizing: 'border-box', border: 'none', margin: 0 }}>Order Online</a>
              </div>
            </div>

            {/* Union, NJ */}
            <div className="location-item" data-lat="40.6976" data-lng="-74.2632" style={{ marginBottom: '30px', padding: '25px', border: '2px solid #f0f0f0', borderRadius: '10px', background: '#ffffff', transition: 'all 0.3s ease', cursor: 'default' }}>
              <h2 className="h2" style={{ color: 'var(--omgyro-orange)', marginBottom: '15px', fontSize: '22px', fontWeight: 600, transition: 'color 0.3s ease' }}>📍 Union, NJ</h2>
              <p style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '14px', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--omgyro-black)', fontSize: '15px', display: 'block', marginBottom: '8px' }}>Hours</strong>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Sunday-Thursday: 10:30am - 1:00am</span>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Friday-Saturday: 10:30am - 2:00am</span>
              </p>
              <div className="location-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px', alignItems: 'center', width: '100%' }}>
                <a href="https://maps.google.com/?q=OMGyro+Union+NJ" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', boxSizing: 'border-box', border: 'none', margin: 0 }}>View on Map</a>
                <a href="https://omgyrohalal.square.site/" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', boxSizing: 'border-box', border: 'none', margin: 0 }}>Order Online</a>
              </div>
            </div>

            {/* Paramus, NJ */}
            <div className="location-item" data-lat="40.9485" data-lng="-74.0933" style={{ marginBottom: '30px', padding: '25px', border: '2px solid #f0f0f0', borderRadius: '10px', background: '#ffffff', transition: 'all 0.3s ease', cursor: 'default' }}>
              <h2 className="h2" style={{ color: 'var(--omgyro-orange)', marginBottom: '15px', fontSize: '22px', fontWeight: 600, transition: 'color 0.3s ease' }}>📍 Paramus, NJ</h2>
              <p style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '14px', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--omgyro-black)', fontSize: '15px', display: 'block', marginBottom: '8px' }}>Hours</strong>
                <span style={{ display: 'block', marginTop: '4px' }}>🕒 Sunday-Saturday: 10:30am - 11:00pm</span>
              </p>
              <div className="location-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px', alignItems: 'center', width: '100%' }}>
                <a href="https://maps.google.com/?q=OMGyro+Paramus+NJ" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', boxSizing: 'border-box', border: 'none', margin: 0 }}>View on Map</a>
                <a href="https://omgyrohalal.square.site/" className="btn btn-brand location-btn" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '15px', height: '44px', boxSizing: 'border-box', border: 'none', margin: 0 }}>Order Online</a>
              </div>
            </div>

            {/* Coming Soon */}
            <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '3px solid #e0e0e0' }}>
              <h3 className="h3" style={{ color: 'var(--omgyro-black)', marginBottom: '20px', fontSize: '20px', fontWeight: 600 }}>Coming Soon</h3>

              <div className="coming-soon-item" data-lat="40.4140" data-lng="-74.3196" style={{ marginBottom: '12px', padding: '18px 20px', background: '#f9f9f9', borderRadius: '8px', cursor: 'pointer', border: '2px solid #e8e8e8', transition: 'all 0.3s ease' }}>
                <h4 style={{ color: 'var(--omgyro-orange)', margin: 0, fontSize: '16px', fontWeight: 600 }}>📍 Old Bridge, NJ</h4>
              </div>

              <div className="coming-soon-item" data-lat="40.8198" data-lng="-74.2904" style={{ marginBottom: '12px', padding: '18px 20px', background: '#f9f9f9', borderRadius: '8px', cursor: 'pointer', border: '2px solid #e8e8e8', transition: 'all 0.3s ease' }}>
                <h4 style={{ color: 'var(--omgyro-orange)', margin: 0, fontSize: '16px', fontWeight: 600 }}>📍 Elmwood, NJ</h4>
              </div>

              <div className="coming-soon-item" data-lat="40.7968" data-lng="-74.4815" style={{ marginBottom: '12px', padding: '18px 20px', background: '#f9f9f9', borderRadius: '8px', cursor: 'pointer', border: '2px solid #e8e8e8', transition: 'all 0.3s ease' }}>
                <h4 style={{ color: 'var(--omgyro-orange)', margin: 0, fontSize: '16px', fontWeight: 600 }}>📍 Morris Twp, NJ</h4>
              </div>
            </div>

          </div>

          {/* Map on Right */}
          <div className="map-wrapper">
            <div className="map-container">
              <div className="map-accent" />
              <iframe
                id="map"
                className="map-inner"
                title="OMGYRO Locations Map"
                style={{ width: '100%', height: '750px', border: 0, borderRadius: '0 0 24px 24px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96698.46783015258!2d-74.26129999999999!3d40.73430000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253b2e7a38e61%3A0x4b8ab76a8adf5bd8!2sSouth%20Orange%2C%20NJ!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
              />
              <div className="map-attribution">OMGYRO® · Find us in NJ</div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
