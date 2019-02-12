# -*- mode: ruby -*-
# vi: set ft=ruby :


# Utilizare la versión 2 de Vagrant
Vagrant.configure("2") do |config|

 # Proveedor Digital Ocean
  config.vm.provider :digital_ocean do |provider, override|
	# Lugar donde se almacena la clave ssh para conectarse a la api de Digital Ocean 
	# sin tener que utilizar la contraseña que vagrant utiliza por defecto
	override.ssh.private_key_path = "~/.ssh/id_rsa"

	# Box a utilizar
	override.vm.box = "digital_ocean"

	# En caso de no encontrar el box de DO descargado, se lo descarga de la siguiente url
	override.vm.box_url = "https://github.com/devopsgroup-io/vagrant-digitalocean/raw/master/box/digital_ocean.box"

	# Nombre de mi clave ssh para la autenticacion
	provider.ssh_key_name = "lenovo ideapad 700"
	
	# Token para el acceso de la API de DO
	provider.token = ENV['DIGITAL_OCEAN_API']

	# ISO que se va a instalar en la máquina
	provider.image = "Ubuntu-18-04-x64"

	# Región donde se encuentra la máquina
	provider.region = "ams3"

  end
  
# Para el provisionamiento utilizaré Ansible
  config.vm.provision 'ansible' do |ansible|
	
	# Permito el modo root
	ansible.become = true

	# Nivel de explicación que dará cuando provisionemos la máquina
  	ansible.verbose = "vv"
	
	# Archivo de provisionamiento a ejecutar
	ansible.playbook = "provision/playbook.yml"
  end
end
