export default function About() {
  return (
    <div className="w-full flex flex-col items-center py-6 px-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h1>

      <p className="text-lg text-center text-gray-600 mb-6 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend
        nulla ac tellus congue ultrices. Cras dapibus dui at metus blandit, et
        gravida dui tristique. Proin tortor quam, rutrum ac pharetra vitae,
        blandit ut risus.
      </p>

      <div className="w-full text-center max-w-4xl p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Motivation
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Fusce euismod accumsan turpis ut porta. Duis tempus, ligula a luctus
          sagittis, enim felis laoreet mi, bibendum tempor lectus sem eget arcu.
          Integer at velit ac purus dapibus commodo ut eget urna. Curabitur nunc
          ipsum, venenatis id neque quis, tincidunt lobortis ante. Integer
          accumsan lorem vel laoreet auctor.
        </p>
      </div>

      <div className="w-full text-center max-w-4xl bg-gray-100 rounded-lg shadow-lg mb-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eleifend efficitur erat, et semper justo sodales a. Suspendisse
          potenti. Fusce.
        </p>
        <p className="text-lg text-gray-600">
          Email us at:{" "}
          <span className="font-semibold text-blue-500">
            contact@ourcompany.com
          </span>
        </p>
      </div>
    </div>
  );
}
