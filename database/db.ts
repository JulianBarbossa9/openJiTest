import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconneting
 */

const mongoConnection = {
  isConnected: 0
}

export const connect = async () => {
  console.log(mongoConnection.isConnected)
  console.log(mongoose.connections.length)
  if (mongoConnection.isConnected ){
    console.log('We already conected')
    return
  }
  if (mongoose.connections.length > 0){
    mongoConnection.isConnected = mongoose.connections[0].readyState
    console.log("state " + mongoose.connections[0].readyState)
    console.log("connection " + mongoConnection.isConnected)

    if (mongoConnection.isConnected === 1){
      console.log('Using previous conection')
      return
    }

    await mongoose.disconnect()
  }

  await mongoose.connect(process.env.MONGO_URL || '')
  mongoConnection.isConnected = 1
  console.log('Conected to MongoDB: ', process.env.MONGO_URL)
}


export const disconnect =async () => {

  if (process.env.NODE_ENV === 'development') return //Don't disconnect 
  if ( mongoConnection.isConnected === 0) return 

  await mongoose.disconnect()
  console.log('Disconect of MongoDB')
}