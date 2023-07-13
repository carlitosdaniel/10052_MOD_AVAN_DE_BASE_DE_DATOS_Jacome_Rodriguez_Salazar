# 10052_MOD_AVAN_DE_BASE_DE_DATOS_Jacome_Rodriguez_Salazar
Proyecto Segundo Parcial; Replica set y Sharding

EJECUTAMOS EL CONTENEDOR
docker-compose -f docker-compose.yaml up -d
ENTRAR AL SHELL DE MONGO DEL CONFIG SERVER
mongosh mongodb://192.168.100.85:27019
PARA INICIAR LA REPLICA DE CONFIGURACION DE LOS SERVIDORES
CONFIGSVR
rs.initiate(
  {
    _id: "configserver",
   configsvr: true,
    members: [
      { _id : 0, host : "192.168.100.85:27019" },
      { _id : 1, host : "192.168.100.85:27020" },
      { _id : 2, host : "192.168.100.85:27021" }
    ]
  }
)
ENTRAR AL SHELL DE MONGO DEL MASTER1 LADO IZQUIERDO
mongosh mongodb://192.168.100.85:27030
PARA INICIAR LA REPLICA DE CONFIGURACION DEL MASTER1RS LADO IZQUIERDO

rs.initiate(
  {
    _id: "master1rs",
    members: [
      { _id : 0, host : "192.168.100.85:27030" },
      { _id : 1, host : "192.168.100.85:27031" },
      { _id : 2, host : "192.168.100.85:27032" }
    ]
  }
)
ENTRAR AL SHELL DE MONGO DEL MASTER2 LADO IZQUIERDO
mongosh mongodb://192.168.100.85:27040
PARA INICIAR LA REPLICA DE CONFIGURACION DEL MASTER2RS LADO IZQUIERDO

rs.initiate(
  {
    _id: "master2rs",
    members: [
      { _id : 0, host : "192.168.100.85:27040" },
      { _id : 1, host : "192.168.100.85:27041" },
      { _id : 2, host : "192.168.100.85:27042" }
    ]
  }
)

ENTRAR AL SHELL DE MONGO DEL MASTER3 LADO DERECHO
mongosh mongodb://192.168.100.85:27050
PARA INICIAR LA REPLICA DE CONFIGURACION DEL MASTER3RS LADO DERECHO

rs.initiate(
  {
    _id: "master3rs",
    members: [
      { _id : 0, host : "192.168.100.85:27050" },
      { _id : 1, host : "192.168.100.85:27051" },
      { _id : 2, host : "192.168.100.85:27052" }
    ]
  }
)
CONFIGURACION DEL MONGOS ROUTER

mongosh mongodb://192.168.100.85:27018
AÑADIMOS LOS SHARDS DE CADA MASTER DEL LADO IZQUIERDO

sh.addShard("master1rs/192.168.100.85:27031,192.168.100.85:27032")
sh.addShard("master2rs/192.168.100.85:27041,192.168.100.85:27042")
FRAGMENTAMOS LA COLECCIÓN EN ESTE CASO ES ANIME 
.shardCollection("programstv.animes", {"anime_id":"hashed"})
HABILITAMOS LA FRANGMENTACION Y EL NOMBRE DE LA BASE DE DATOS

sh.enableSharding("programstv")

VEMOS LA DISTRIBUCION DE LOS FRAGMENTOS DE CADA REPLICA

db.animes.getShardDistribution()

