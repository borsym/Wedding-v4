function MapOfLocation() {
  return (
    <div className="mapWrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.1597690613958!2d21.83903277621004!3d47.87523387121568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474762c2c56829b1%3A0xf0c0d035f1798f39!2sNagyk%C3%A1ll%C3%B3%2C%20J%C3%B3zsef%20Attila%20utca%2024%2C%204320%20Hungary!5e0!3m2!1sen!2sus!4v1672095960557!5m2!1sen!2sus"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapOfLocation;
