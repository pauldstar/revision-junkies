<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tips()
    {
        return $this->belongsToMany(Tip::class)->withTimestamps();
    }
}
