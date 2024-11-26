def sau():
    print("Olá, seja bem-vindo")
sau()

def sau(nome):
    print(f"olá, {nome}! Seja bem vindo!")

sau("Gilton") 

def soma(a,b):
    return a+b

resultado= soma(5,3)
print("A soma é:", resultado)

def numero(a):
    return a*a
resultado= numero(10)
print("o quadrado do número é:", resultado)

def bao(nome):
    print(f"Olá, {nome}! Seja bem vindo ao CFO")

dragonB = ["Goku", "Vegeta", "Gohan", "Goten", "Piccolo"]
print(dragonB[3])
print(dragonB[1])
dragonB.append("Bills")
print(dragonB)
#DragonB.remove("majin buu")#
#print(DragonB) n^so consegue imprimir da valor de erro#
print(dragonB)
 
for dragon in dragonB:
     print(dragon)