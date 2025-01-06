print("Olá mundo")
print("")
nome = "Maria"
idade = 29
altura = 1.68
estudando = True

print(nome,idade,altura,estudando)
print("")

nome = input("Digite seu nome: ")
print(nome)
print("")

num1=int(input("Digite um número: "))
num2=int(input("Digite um número: "))

soma = num1+num2

print(f"A soma de {num1} e {num2} é igual a {soma} \n")

numero = int(input("Digite um número: "))

if numero % 2 == 0:
    print(f"O número {numero} é par")
else:
    print(f"O número {numero} é ímpar \n")

print(f"Atividade 1 \n")
name = input("Digite seu nome: ")
age = int(input(f"Digite sua idade:"))
print(f"Seu nome é {name} e sua idade é {age}\n")

print(f"Atividade 2 \n")

number1 = int(input("Digite um número: "))
number2 = int(input("Digite um número: "))

soma = number1+number2
diferenca = number1-number2
produto = number1*number2

print(f"""

A soma entre {number1} e {number2} é {soma}
A diferença entre {number1} e {number2} é {diferenca}
O produto entre {number1} e {number2} é {produto}

""")