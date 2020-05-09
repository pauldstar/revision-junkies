<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    public function tips()
    {
        return $this->belongsToMany(Tip::class)->withTimestamps();
    }

    public function educationLevels()
    {
        return $this->belongsToMany(EducationLevel::class)->withTimestamps();
    }

    public function methods()
    {
        return $this->belongsToMany(Method::class)->withTimestamps();
    }
}
