import fs from 'fs';
import path from 'path';
import https from 'https';

const images = {
  'creative-director.jpg': 'https://lh3.googleusercontent.com/aida/AEtjO1VnHhj1NRMGMUmzzMKfO_lyxvPAaYSt5WmidJgk2lVC5fLgZ-QHZHrStThwP7Yqo5lx3rUDaouVIOjDnDDJf0Ho-aQxjt0TVJN0vZDtyFQy4hOs7sHEkVTReA6z2c-vg3rzzGG3C8IJtAnh054cJHeQCr4YErAGng7FEIAsiOorY95G3bCwTMTkbVpdzcffRwhYp-M26HeYo7fn_CtdslM_F6FvKw2kLp9kcKM6SDNIf4mtYa_EdFgnCOyI',
  'hero-reel-center.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlqCiitFrjF72ikZXbAp1w8_JoRil6JWm0C4sU58pKW4PIw-FGDVaGcCOmVcqMwqJBF5erfEEGRfEE5AghQgrhrYfaMNbBKB1DR1HN4rG6cmbKlVaMEAk7LOy7QxOs_txhOeCOBE7ph12y6UU7hiZo-eGtTggPOpU7AwSzGnoAbA_J1P5sxp-zKpZV5kNF_aC7LutUeN_z23-6BKP7ibZX-JZBQ0cigd5Uj5gr7JcbV8opeOuwHmVv3A',
  'reel-streetwear-runway.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzkLlkVAPiGrfcH3Db0h-yWq1W8_LdZt5MAmoUPQ4_a2je85hW09LnJfZ8Gff16wHYPVmwscL3lrpdu2YoZrTm5hdiL-m08oPz-ckg4C5ZjHPYnPnhtIHD2qvdKDeYz7yccmK-UYYHK-NjwFVlOxPUfjDvLr869Vnv4vHhua5mPxXFRkJcWLYm4XqM9xE6odYiwp-rOMqKUeCNYuWVcg6TPRe0Qp61mRNVfbgJzaD4F1_ol9-SaTWjpg',
  'reel-noir-serum.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY1M4xdoyZDQI7GiGXj6Ebcd2IweoAKTlNI8xNp96A0k514kf2a0wGFKlrovOHHot2bDAJt_OI-PfL7HkaF7kzRqAxw5d4qL2UDYk1ktfYhKouAS-LOabIdqw0BQ2lMd_A81MKKM0LzL1KXBOgpWWKH5R5DuSa30-0QrUVRPVaMrp3zIyOTFIVQgxCj8ozN1kir8xpzk_Xm2J569KvEY6EAjbfC1fY4EfeL6Rgz9vMdkIhpQRtjZRcCA',
  'reel-clinical-ads.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5-kSs3kiDBFk3byIS5uYeVYp1eTV5tFrHj6n_c4HZeicz6sbajFEf09PYOtJ8wu9tm2Mx-7GNqRzHbtVX7shjRJQ__5h3Of7rncleYVqnNMDTZIfr2mmz3Rtx6XfSasYf9CzBHTogYoU0_m0PC4Xomyzp83BAGTdMpl61WDzcuphKBYrWcA9dvMgtJ6nyrsyM8rIk5QdSn-5dELHWVdesRrmgjgjxOSsYXnqw0vU6JkKyiJEKtwCMaQ',
  'reel-founder-matrix.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2bQb3QlPZ0vBWDlhhvnpK5wdWOQrdoIjCJcXNHgZkGceZwLfjcNrxCcP8lCzOu-pHtVlTPpYeRVvfzHpSZ3QJeRVl7wI348ZFcHW0wLR_LL3DHIAtgseFCPtzPBNjgqGqlx5DwuZxA92bYAyxJQDf1LPYE-AEAQwZq4BTsd63-GWvxVYGcqzi8uzDp0kYAAxwzXoQvE8n0Ws9Hb2_DGbWmrJ3iqa8UleityM9QOv5WBiCJVMJVMpJng',
  'case-noir-botanics.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGxo0kChusiB0L4N9hp5omq7gMsLwa353zJ2mX7eLHbuKT3Ox7az4wdkP1AKY-YjFGNDVjDeX6rHCs6AosG7VUp9NxvDhjrz_RVH4IMenaAKwScvlK4ig3WGTmBwraNQecoxCvq1FFqVtg2QVO-Wy_xqkZa3Yp_G-ISS_LKy4wzDgOJ7kQvSAJ1Al3QTmAL1q7mzh9dx0mHuselW2qmgms7TjISVgs-DELukzaawswD7Vg3MMkVgX1vQ',
  'case-atelier-velox.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9f9gkb02PaucFSCdlSg7ZzmVItPVfxc-HhAcl7s4on93peMRedIZve6BVMYNlkGVskW0KU7_mpUc3MuS1hzHgGLo3lrcqNUpOWPmP-rS3tCGoGE0mMPeoncesTeZGq07w9D2KOG0SoGBRa3TvAlA650n4zVS3MTTKFGYuG0u9s8d5tGv8iEIiflq7LmBRYOd7QmQFmQsx5-WlVsZA8uwEyM6612JA-X4sLuiP4-LGOvW7QAW2kZA7Fw'
};

const outputDir = path.resolve('public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(filename, url) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);
    const fileStream = fs.createWriteStream(filePath);
    
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded ${filename}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      resolve(); // Do not reject, allow fallbacks
    });
  });
}

async function run() {
  console.log('Starting image asset localization...');
  for (const [filename, url] of Object.entries(images)) {
    await downloadFile(filename, url);
  }
  console.log('Asset localization complete.');
}

run();
