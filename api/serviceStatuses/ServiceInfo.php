<?php
class ServiceInfo{
    public $name;
    public $ip;
    public $port;
    public $status;
    public $link;

    public function __construct($name, $ip, $port, $status, $link)
    {
        $this->name = $name;
        $this->ip = $ip;
        $this->port = $port;
        $this->status = $status;
        $this->link = $link;
    }
}