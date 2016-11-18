## HW5
### Submitted by Sekharan Natarajan (smntara)

#### What is Ansible :
Great video : https://www.youtube.com/watch?v=UfD0BASLcJ0


Steps which I have followed:

** In order to test Part 1 and Par 2 of this HW **
1. Create two VM's (One where Ansible will be installed and the other is a node where ansible will run the instructions in playbook )

2. Follow the setup as mentioned in [class](https://github.com/CSC-510/Course/blob/master/Materials/CM.md) to setup communication between the nodes by placing the keys in `~/keys/node0.key`

3. Setup the [inventory](./inventory) as given in the home folder

Run sudo ansible-playbook --inventory=inventory setup.yaml
to test part 1

Run sudo ansible-playbook --inventory=inventory tasks.yaml
to test part 2


** In order to test Bonus : **
1. First create a AWS developer account and set the access and paste it in the aws_access_key and aws_secret_key field of the ec2 module

2. Then create a security group to open up ports to open up port 22 . Call it `inbound`

3. Create a key pair to allow ansible to ssh into the newly created VM. Call it 'bonus'. This will download a private key file called `bonus.pem`. Save it in the folder where provision.yaml is present.

4. In the `provision.yaml` change the `group_id` setting under the `ec2` module

Important : There is some problem with 16.04 ubuntu image. I was getting python not found error. Looks like 16.04 ships with python3. So I'm using a 14.04 image.

Run `ansible-playbook -s provision.yaml`

#### The screencast can be found [here](tiny.cc/hw5cmse)






