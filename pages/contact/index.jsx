import { contactInfo } from '../../data';

const index = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 text-white">
        <span className="flex h-60 items-center text-4xl">Contact Us</span>
      </div>
      <div className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-2">
          {contactInfo.map((contact) => {
            const {
              id,
              imageSrc,
              imageDesc,
              city,
              barName,
              address,
              phoneNumber,
            } = contact;

            return (
              <div key={id}>
                <img
                  className="max-h-96 w-full object-cover"
                  src={imageSrc}
                  alt={imageDesc}
                />
                <div className="py-5 text-sm">
                  <h1 className="text-xl">{city}</h1>
                  <h2 className="font-bold">{barName}</h2>
                  <p>{address}</p>
                  <p>{phoneNumber}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
