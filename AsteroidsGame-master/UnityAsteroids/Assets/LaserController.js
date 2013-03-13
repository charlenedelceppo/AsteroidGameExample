#pragma strict

//declaring variables here;

var laserspeed:int;

function Start () {

}

function Update ()
{
	//all the laser need is forward action
	transform.Translate(Vector3.up * laserspeed * Time.deltaTime);

}

//to trigger the laser when it comes out the camera. this is to destroy the cloneing
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}