<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    public function tips()
    {
        return $this->belongsToMany(Tip::class)->withTimestamps();
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class)->withTimestamps();
    }
}
