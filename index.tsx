mkdir kruz-bank-erms
cd kruz-bank-erms
mkdir frontend backend
npm init -y
cd frontend
npx create-react-app .
cd ../backend
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv cors

