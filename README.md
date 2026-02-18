# windsurf

# Server-Side (Java Spring Boot)
# คำสั่งความหมาย 
cd project-api : เข้าไปที่โฟลเดอร์หลังบ้าน
mvn spring-boot:run : รัน Server (ถ้าพี่เซ็ต PATH Maven ไว้แล้ว)
mvn clean install : ล้างไฟล์เก่าและดาวน์โหลด Library ใหม่ทั้งหมด
Ctrl + C :หยุดการทำงานของ Server

# Client-Side (React + Vite)
# กรณี setup PATH ไม่ได้
$nodePath = "C:\node-v24\node-v24.13.1-win-x64"; $env:PATH = "$nodePath;" + $env:PATH; Set-Alias -Name node -Value "$nodePath\node.exe"; Set-Alias -Name npm -Value "$nodePath\npm.cmd"; Write-Host " Node.js is ready" -ForegroundColor Green

# คำสั่งความหมาย
cd my-frontend : เข้าไปที่โฟลเดอร์หน้าบ้าน
npm install : ติดตั้ง Library (ทำครั้งแรกหรือเวลาโหลดโค้ดใหม่มา)
npm run dev : รันหน้าเว็บ สำหรับการพัฒนา (ปกติจะอยู่ที่ Port 5173)
npm install <ชื่อ library> : เพิ่มความสามารถใหม่ เช่น npm install axios
npm run build : สร้างไฟล์สำหรับเอาไปใช้งานจริง (Production)
Ctrl + C : หยุดการทำงานของหน้าเว็บ