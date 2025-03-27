const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwtUtils');
const prisma = require('../prisma/prisma-client');

async function register(data) {
  const {
    name,
    email,
    password,
    phoneNumber,
    address,
    profilePicture,
    idCardUpload,
    drivingLicenseUpload,
  } = data;



  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.seller.create({
    data: {
      name,
      email,
      phoneNumber,
      address,
      profilePicture,
      idCardUpload,
      drivingLicenseUpload,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      address: true,
      profilePicture: true,
      idCardUpload: true,
      drivingLicenseUpload: true,
    },
  });
}

async function login(data) {
  const { email, password } = data;

  const seller = await prisma.seller.findUnique({
    where: { email: email },
  });

  if (!seller) {
    throw new Error('Invalid credentials');
  }

  const passwordMatch = await bcrypt.compare(password, seller.password);

  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwtUtils.generateToken(seller.id);

  return {
    token,
    seller: {
      id: seller.id,
      name: seller.name,
      email: seller.email,
      phoneNumber: seller.phoneNumber,
      address: seller.address,
      profilePicture: seller.profilePicture,
      idCardUpload: seller.idCardUpload,
      drivingLicenseUpload: seller.drivingLicenseUpload,
    },
  };
}

async function getProfile(id) {
  return prisma.seller.findUnique({
    where: { id: parseInt(id) },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      address: true,
      profilePicture: true,
      idCardUpload: true,
      drivingLicenseUpload: true,
    },
  });
} 

async function updateProfile(id, data) {
  const {
    name,
    email,
    phoneNumber,
    address,
    profilePicture,
    idCardUpload,
    drivingLicenseUpload,
  } = data;

  return prisma.seller.update({
    where: { id: parseInt(id) },
    data: {
      name,
      email,
      phoneNumber,
      address,
      profilePicture,
      idCardUpload,
      drivingLicenseUpload,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      address: true,
      profilePicture: true,
      idCardUpload: true,
      drivingLicenseUpload: true,
    },
  });
}

module.exports = { register, login , getProfile, updateProfile };